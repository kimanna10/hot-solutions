// import Button from "@/components/ui/Button";
// import Input from "@/components/ui/Input";

// export default function ApplicationForm() {
//   return (
//     <form
//       className="space-y-4"
//       aria-label="Форма заявки"
//       onSubmit={(e) => e.preventDefault()}
//     >
//       <Input
//         id="name"
//         name="name"
//         label="Имя"
//         required
//         autoComplete="name"
//         placeholder="Введите имя"
//       />
//       <Input
//         id="email"
//         name="email"
//         label="Email"
//         type="email"
//         placeholder="Введите email"
//         required
//       />
//       <Input
//         id="phone"
//         name="phone"
//         label="Телефон"
//         type="tel"
//         placeholder="Введите телефон"
//         required
//       />
//       <Input
//         id="theme"
//         name="theme"
//         label="Тема"
//         placeholder="Введите тему"
//         required
//       />
//       <Button variant="primary" size="lg" type="submit" className="w-full">
//         Подать заявку
//       </Button>
//     </form>
//   );
// }
"use client";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { useState } from "react";

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    theme: "",
  });
  const [file, setFile] = useState(null); // добавим файл

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("⏳ Отправка...");

    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("theme", form.theme);
    if (file) formData.append("file", file); // прикрепляем файл

    const res = await fetch("/api/sendmail", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("✅ Заявка успешно отправлена");
      setForm({ name: "", email: "", phone: "", theme: "" });
      setFile(null);
    } else {
      setStatus("❌ Ошибка при отправке");
    }
  };

  return (
    <form
      className="space-y-4"
      aria-label="Форма заявки"
      onSubmit={handleSubmit}
      encType="multipart/form-data"
    >
      <Input
        name="name"
        label="Имя"
        required
        placeholder="Введите имя"
        value={form.name}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        label="Email"
        required
        placeholder="Введите email"
        value={form.email}
        onChange={handleChange}
      />
      <Input
        name="phone"
        type="tel"
        label="Телефон"
        required
        placeholder="Введите телефон"
        value={form.phone}
        onChange={handleChange}
      />
      <Input
        name="theme"
        label="Тема"
        required
        placeholder="Введите тему"
        value={form.theme}
        onChange={handleChange}
      />
      <input
        name="file"
        type="file"
        accept=".doc, .docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="mt-1 block w-full text-sm text-gray-600 file:border file:border-gray-300 file:px-3 file:py-1 file:rounded-md file:bg-white"
      />
      <Button variant="primary" size="lg" type="submit" className="w-full">
        Подать заявку
      </Button>
      <p className="text-sm text-muted-foreground">{status}</p>
    </form>
  );
}
