// lib/createSafeFilename.js
export function createSafeFilename(extension = ".docx") {
  const now = new Date();
  const date = now.toISOString().slice(0, 10); // YYYY-MM-DD
  const time = now.toTimeString().slice(0, 5).replace(":", "-"); // HH-MM
  return `hotsolutions_zayavka_${date}_${time}${extension}`;
}
