"use client";

import { useModalStore } from "@/lib/store";
import { useEffect } from "react";
import ReactModal from "react-modal";

const Modal = () => {
  const { isOpen, toggleStore } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={toggleStore}
      className="fixed inset-8 flex flex-col justify-center items-center bg-white rounded-md"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50"
    >
      <div className="p-8 h-full w-[80%] overflow-hidden">
        <p>hi</p>
      </div>
    </ReactModal>
  );
};

export default Modal;
