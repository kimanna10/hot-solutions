import api from "./axios";

// Получить все курсы
export async function getCourses() {
  try {
    const response = await api.get("/courses");
    return response.data;
  } catch (error) {
    console.error("Ошибка при получении курсов:", error);
    throw error;
  }
}

// Получить один курс по slug
export async function getCourseBySlug(slug) {
  try {
    const response = await api.get(`/courses?slug=${slug}`);
    return response.data[0]; // json-server возвращает массив
  } catch (error) {
    console.error(`Ошибка при получении курса ${slug}:`, error);
    throw error;
  }
}
