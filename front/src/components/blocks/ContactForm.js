// "use client";
// import { useState } from "react";

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Отправка...");

//     const res = await fetch("/api/sendmail", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(form),
//     });

//     if (res.ok) {
//       setStatus("✅ Отправлено!");
//       setForm({ name: "", email: "", message: "" });
//     } else {
//       setStatus("❌ Ошибка при отправке.");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//       <input
//         name="name"
//         value={form.name}
//         onChange={handleChange}
//         required
//         placeholder="Имя"
//       />
//       <input
//         name="email"
//         type="email"
//         value={form.email}
//         onChange={handleChange}
//         required
//         placeholder="Email"
//       />
//       <textarea
//         name="message"
//         value={form.message}
//         onChange={handleChange}
//         required
//         placeholder="Сообщение"
//       />
//       <button type="submit">Отправить</button>
//       <p>{status}</p>
//     </form>
//   );
// }

"use client";
import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Отправка...");

    const res = await fetch("/api/sendmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("✅ Сообщение отправлено!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("❌ Ошибка при отправке");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Имя"
        required
      />
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Сообщение"
        required
      />
      <button type="submit">Отправить</button>
      <p>{status}</p>
    </form>
  );
}
