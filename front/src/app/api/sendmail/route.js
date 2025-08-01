// import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { name, email, phone, theme } = await req.json();
//   const uploadedFile = files.file;

//   if (!email) {
//     return new Response(JSON.stringify({ error: "Missing fields" }), {
//       status: 400,
//     });
//   }

//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com", // Или smtp.mail.ru
//     port: 465,
//     secure: true,
//     auth: {
//       user: process.env.SMTP_USER, // логин
//       pass: process.env.SMTP_PASS, // пароль
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: `"Заявка" <${process.env.SMTP_USER}>`,
//       to: process.env.SMTP_RECEIVER,
//       subject: `Заявка: ${theme}`,
//       html: `
//           <p><strong>Имя:</strong> ${name}</p>
//           <p><strong>Email:</strong> ${email}</p>
//           <p><strong>Телефон:</strong> ${phone}</p>
//           <p><strong>Тема:</strong> ${theme}</p>
//         `,
//       attachments: uploadedFile
//         ? [
//             {
//               filename: uploadedFile.originalFilename,
//               path: uploadedFile.filepath,
//             },
//           ]
//         : [],
//     });

//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error("Ошибка при отправке:", error);
//     return new Response(JSON.stringify({ error: "Send failed" }), {
//       status: 500,
//     });
//   }
// }
import { createSafeFilename } from "@/lib/createSafeFilename.js"; // добавь импорт
import Busboy from "busboy";
import nodemailer from "nodemailer";
import os from "os";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  if (req.method !== "POST") {
    return new Response("Метод не поддерживается", { status: 405 });
  }

  const busboy = Busboy({
    headers: Object.fromEntries(req.headers),
  });

  const fields = {};
  let uploadedFilePath = "";
  let uploadedFileName = "";

  const tmpdir = os.tmpdir();

  const finished = new Promise((resolve, reject) => {
    busboy.on("file", (fieldname, file, info) => {
      const { filename } = info;
      if (!filename) return;

      const ext = path.extname(filename).toLowerCase();

      if (![".doc", ".docx"].includes(ext)) {
        reject(
          new Response("❌ Только .doc или .docx файлы разрешены", {
            status: 400,
          })
        );
        return;
      }

      const safeFilename = createSafeFilename(ext);
      const filepath = path.join(tmpdir, safeFilename);
      const writeStream = writeFileStream(filepath);

      file.pipe(writeStream);

      uploadedFilePath = filepath;
      uploadedFileName = safeFilename;

      writeStream.on("error", reject);
      writeStream.on("finish", resolve);
    });

    busboy.on("field", (fieldname, val) => {
      fields[fieldname] = val;
    });

    busboy.on("finish", resolve);
    busboy.on("error", reject);
  });

  const reader = req.body.getReader();
  const decoder = new TextDecoder("utf-8");

  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        controller.enqueue(value);
      }
      controller.close();
    },
  });

  const webReadable = stream;
  const nodeReadable = require("stream").Readable.from(webReadable);

  nodeReadable.pipe(busboy);

  await finished;

  // Отправка письма
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Заявка с сайта" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_RECEIVER,
      subject: `Тема: ${fields.theme}`,
      html: `
        <p><strong>Имя:</strong> ${fields.name}</p>
        <p><strong>Email:</strong> ${fields.email}</p>
        <p><strong>Телефон:</strong> ${fields.phone}</p>
      `,
      attachments: uploadedFilePath
        ? [
            {
              filename: uploadedFileName,
              path: uploadedFilePath,
            },
          ]
        : [],
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error("Ошибка SMTP:", err);
    return new Response("Ошибка отправки", { status: 500 });
  }
}

function writeFileStream(filePath) {
  const fs = require("fs");
  const stream = fs.createWriteStream(filePath);
  return stream;
}

// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { name, email, phone, theme } = await req.json();

//   try {
//     const data = await resend.emails.send({
//       from: "Hot Solutions <test@resend.dev>", // нужно подтвердить домен или использовать test@resend.dev noreply@yourdomain.com
//       to: ["hotsolutionsuc@gmail.com"],
//       subject: "Сообщение с формы сайта",
//       subject: `Заявка: ${theme}`,
//       html: `
//         <p><strong>Имя:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Телефон:</strong> ${phone}</p>
//         <p><strong>Тема:</strong> ${theme}</p>
//       `,
//     });

//     return new Response(JSON.stringify({ success: true, data }), {
//       status: 200,
//     });
//   } catch (error) {
//     console.error("Resend error:", error);
//     return new Response(JSON.stringify({ error: "Send failed" }), {
//       status: 500,
//     });
//   }
// }
