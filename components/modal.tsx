"use client";

import { useModalStore } from "@/lib/store";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { PuffLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

const Modal = () => {
  const { isOpen, setIsClosed, href } = useModalStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
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
      className="fixed w-full min-h-[100px] max-h-[80vh] overflow-hidden flex flex-col justify-center items-center outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center "
    >
      {isLoading ? null : (
        <FontAwesomeIcon
          icon={faXmark}
          className="absolute top-4 right-4 sm:top-8 sm:right-8 text-xl  sm:text-3xl cursor-pointer text-white hover:text-gray-600 z-50 transition-all duration-100"
          onClick={setIsClosed}
        />
      )}
      <div className="absolute w-fit h-fit bottom-0 top-0 left-0 right-0 m-auto">
        <PuffLoader
          color="white"
          loading={isLoading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
          className=""
        />
      </div>
      <Image
        src={href}
        onLoad={() => setIsLoading(false)}
        alt="
          Discover the best of the best in golf, dining, entertainment, and more at 26° North, the premier country club in the Twin Cities.
          "
        className={twMerge(
          "transition-all duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        width={1920}
        height={1080}
        style={{
          aspectRatio: "16/9",
          width: "100vw",
          height: "auto",
          maxHeight: "80%",
        }}
      />
    </ReactModal>
  );
};

export default Modal;
