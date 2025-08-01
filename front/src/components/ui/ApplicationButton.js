"use client";
import ApplicationForm from "@/components/blocks/ApplicationForm";
import ModalWrapper from "@/components/layouts/ModalWrapper";
import { useState } from "react";
import Button from "./Button";

export default function ApplicationButton() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button variant="primary" size="lg" onClick={() => setIsOpen(true)}>
        Заказать
      </Button>
      <ModalWrapper
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Подать заявку"
        description="Подать заявку описание Подать заявку описание Подать заявку описание Подать заявку описание"
        bg="/modal/modal-form-bg.png"
      >
        <ApplicationForm />
      </ModalWrapper>
    </>
  );
}
