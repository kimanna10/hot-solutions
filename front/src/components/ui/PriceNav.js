import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex items-center justify-center w-screen p-4 cursor-pointer bg-primary/20 backdrop-blur-sm">
          <DialogPanel className="max-w-lg p-5 space-y-4 text-white cursor-default bg-primary">
            <DialogTitle className="font-bold">Сюда надо цены</DialogTitle>
            <Description>
              This will permanently deactivate your account
            </Description>
            <p>
              Are you sure you want to deactivate your account? All of your data
              will be permanently removed.
            </p>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
