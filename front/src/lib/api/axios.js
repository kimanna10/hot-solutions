// import axios from "axios";
// import { notFound } from "next/navigation";

// const api = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001",
// });

// // Добавляем перехватчик для ошибок (работает только в Server Components)
// api.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 404) {
//       notFound(); // 👈 Вызовет страницу `not-found.js`
//     } else if (error.response?.status === 403) {
//       throw new Error("Forbidden"); // Вызовет error.js
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;
