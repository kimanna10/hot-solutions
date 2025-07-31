"use client";
import { useEffect } from "react";

export default function Map() {
  const lat = 43.252319;
  const lng = 76.891058;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
    script.onload = () => {
      // eslint-disable-next-line no-undef
      DG.then(function () {
        // ❗ Проверяем: если карта уже есть — удаляем
        const existing = document.getElementById("map");
        if (existing && existing._leaflet_id) {
          existing._leaflet_id = null; // "сброс" старой карты
        }

        // eslint-disable-next-line no-undef
        const map = DG.map("map", {
          center: [lat, lng],
          zoom: 16,
        });

        const popupContent = `
 <div style="font-size: 16px; display: flex; flex-direction: column; gap: 3px;  " class="font-exo-2">
    <h2 style="font-weight: bold; margin: 0;">ТОО "Hot Solutions"</h2>
    <address style="font-size: 15px; margin: 0; font-style: normal;">Улица Толе би, 189д
      <span style="color: gray; font-size: 14px; margin: 0;"> — 200 офис; 2 этаж</span>
    </address>
    <a href="tel:+77073545456" style="text-decoration:none; color: white; font-size: 13px;">+7 (707) 354 54 56</a>
    <em style="color: #FF842C; font-size: 13px;">Пн — Пт 09:00 — 18:00, 13:00 — 14:00</em>
    <a href="https://2gis.kz/almaty/firm/70000001052510034?m=76.891215%2C43.252213%2F17&utm_source=details&utm_medium=widget&utm_campaign=firmsonmap" target="_blank" rel="none" style="text-decoration:none; color: white; font-size: 14px; border: white 1px solid; padding: 5px;  text-align: center;">Узнать больше</a>
  </div>

        `;
        // eslint-disable-next-line no-undef
        DG.marker([lat, lng]).addTo(map).bindPopup(popupContent).openPopup();
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="map" style={{ width: "100%", height: "400px" }} />;
}
