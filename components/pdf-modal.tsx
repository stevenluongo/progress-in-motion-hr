"use client";

import { useModalStore } from "@/lib/store";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { PuffLoader } from "react-spinners";
import { saveAs } from "file-saver";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons/faFileArrowDown";
import { twMerge } from "tailwind-merge";
import PDFViewer from "./pdf-viewer";

const PDFModal = () => {
  const {
    isPDFModalOpen: isOpen,
    setPDFModalClosed: setIsClosed,
    href,
  } = useModalStore();
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

  const saveFile = () => {
    saveAs(href, "example.pdf");
  };

  let title = href
    .replace(
      "https://progressive-buyer.s3.amazonaws.com/realtor+prospective+buyer+",
      ""
    )
    .replace(".pdf", "")
    .replace("+", " ");

  const words = title.split(" ");

  words.forEach((word, index) => {
    words[index] = word.charAt(0).toUpperCase() + word.slice(1);
  });

  title = words.join(" ");

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsClosed}
      className={twMerge(
        "fixed rounded-md w-fit min-h-[100px] min-w-[100px] py-4 px-2 box-border overflow-y-scroll flex flex-col justify-center items-center outline-none",
        isLoading ? "bg-transparent" : "bg-white"
      )}
      overlayClassName="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center "
    >
      {isLoading ? null : (
        <div className="flex justify-between h-[40px] w-full items-center px-6 mb-2">
          <h1 className="text-2xl font-kumbh font-semibold text-blue-900">
            {title}
          </h1>
          <span className="flex gap-x-4 items-center">
            <FontAwesomeIcon
              onClick={saveFile}
              icon={faFileArrowDown}
              className="text-blue-900"
              style={{ width: 20, height: 20, cursor: "pointer" }}
            />
            <FontAwesomeIcon
              onClick={setIsClosed}
              icon={faXmark}
              className="text-blue-900"
              style={{ width: 24, height: 24, cursor: "pointer" }}
            />
          </span>
        </div>
      )}
      <div className="absolute w-fit h-fit bottom-0 top-0 left-0 right-0 m-auto ">
        <PuffLoader
          color="white"
          loading={isLoading}
          size={80}
          aria-label="Loading Spinner"
          data-testid="loader"
          className=""
        />
      </div>
      <PDFViewer
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        file={href}
      />
    </ReactModal>
  );
};

export default PDFModal;
