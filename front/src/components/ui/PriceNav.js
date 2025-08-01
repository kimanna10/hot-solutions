"use client";
import ModalWrapper from "@/components/layouts/ModalWrapper";
import { useState } from "react";

export default function Modal() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <li>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:py-2 lg:px-1.5 px-0 py-1 cursor-pointer w-full text-left"
        >
          Цены
        </button>
      </li>
      <ModalWrapper
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Price"
        description="Цены описание Цены описание Цены описание Цены описание Цены описание Цены описание"
        bg="/modal/modal-price-bg.png"
      >
        Price
      </ModalWrapper>
    </>
  );
}
