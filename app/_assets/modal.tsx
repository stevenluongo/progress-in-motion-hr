"use client";

import { useModalStore } from "@/lib/store";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect } from "react";
import ReactModal from "react-modal";

const Modal = () => {
  const { isOpen, setIsClosed, href } = useModalStore();

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
      onRequestClose={setIsClosed}
      className="fixed inset-8 flex flex-col justify-center items-center bg-white rounded-md outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 "
    >
      <div className="p-8 h-full w-full overflow-hidden">
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-2 right-2 cursor-pointer hover:text-gray-600 z-50 transition-all duration-100"
          style={{ width: 20, height: 20 }}
          onClick={setIsClosed}
        />
        <Image
          src={href}
          alt="
          Discover the best of the best in golf, dining, entertainment, and more at 26° North, the premier country club in the Twin Cities.
        "
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          className="p-8 rounded-md"
        />
      </div>
    </ReactModal>
  );
};

export default Modal;
