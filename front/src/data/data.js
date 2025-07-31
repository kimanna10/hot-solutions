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

// Экспертные работы
export const getExpertOverview = () => db.expert.overview;

export const getExpertItems = () => db.expert.items;

export const getEducationInfo = () => db.education;

export const getCompanyInfo = () => db.company;
