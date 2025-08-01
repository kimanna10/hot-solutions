"use client";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function ModalWrapper({
  isOpen,
  onClose,
  title,
  children,
  description,
  bg,
}) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex items-center justify-center w-screen p-4 cursor-pointer bg-primary/20 backdrop-blur-sm">
        <DialogPanel className="max-w-2xl text-white cursor-default bg-primary flex">
          <div className="md:w-[80%] w-full sm:p-8 p-5 space-y-4">
            <DialogTitle className="font-bold text-2xl">{title}</DialogTitle>
            <Description className="leading-tight">{description}</Description>
            {children}
          </div>

          <div
            className={`md:w-[20%] bg-no-repeat bg-left bg-cover `}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
