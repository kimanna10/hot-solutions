// src/data/data.js
import db from "@/data/db.json";

// Функции для курсов
export const getCourses = () => db.courses;

export const getCourseBySlug = (slug) =>
  db.courses.find((course) => course.slug === slug);

// Постеры
// export const getPostersByTariff = (tariff) => db.posters[tariff] || [];
export const getPosters = () => db.posters;
export const getPosterById = (id) =>
  db.posters.find((poster) => poster.id === id);

// Контакты
export const getContacts = () => db.contacts;

// Гос логотипы
export const getGos = () => db.gos;

// Партнеры
export const getPartners = () => db.partners;
