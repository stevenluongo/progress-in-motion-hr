"use client";

import { useModalStore } from "@/lib/store";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import ReactModal from "react-modal";
import { PuffLoader } from "react-spinners";
import { twMerge } from "tailwind-merge";

const VideoModal = () => {
  const {
    isVideoModalOpen: isOpen,
    setVideoModalClosed: setIsClosed,
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

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={setIsClosed}
      className="fixed w-full min-h-[100px] overflow-hidden flex flex-col justify-center items-center outline-none"
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
      <div
        style={{
          padding: "56.25% 0 0 0",
          position: "relative",
          width: "80vw",
        }}
      >
        <iframe
          src="https://player.vimeo.com/video/902402136?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          onLoad={() => setIsLoading(false)}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="30D Southport Lane"
        ></iframe>
      </div>
      <Script src="https://player.vimeo.com/api/player.js"></Script>
    </ReactModal>
  );
};

export default VideoModal;
