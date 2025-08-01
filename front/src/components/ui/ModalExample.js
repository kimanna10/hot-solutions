"use client";
import ModalWrapper from "@/components/layouts/ModalWrapper";
import { useState } from "react";

export default function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openPrices = () => {
    setModalContent({
      title: "Цены",
      body: (
        <ul className="space-y-2">
          <li>Услуга 1 — 10 000 ₸</li>
          <li>Услуга 2 — 15 000 ₸</li>
          <li>Услуга 3 — 20 000 ₸</li>
        </ul>
      ),
    });
    setIsOpen(true);
  };

  const openFAQ = () => {
    setModalContent({
      title: "Частые вопросы",
      body: (
        <div>
          <p>❓ Как записаться?</p>
          <p>📅 Через WhatsApp или форму на сайте</p>
        </div>
      ),
    });
    setIsOpen(true);
  };

  return (
    <>
      <ul className="space-y-2">
        <li>
          <button onClick={openPrices} className="text-left w-full">
            Цены
          </button>
        </li>
        <li>
          <button onClick={openFAQ} className="text-left w-full">
            Частые вопросы
          </button>
        </li>
      </ul>

      <ModalWrapper
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={modalContent?.title}
      >
        {modalContent?.body}
      </ModalWrapper>
    </>
  );
}
