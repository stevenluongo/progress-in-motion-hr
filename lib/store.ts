import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ModalStoreProps {
  isOpen: boolean;
  setIsOpen: (href: string) => void;
  setIsClosed: () => void;
  isVideoModalOpen: boolean;
  setVideoModalOpen: (src: string) => void;
  setVideoModalClosed: () => void;
  videoSrc: string;
  href: string;
}

export const modalStore = createWithEqualityFn<
  ModalStoreProps,
  [["zustand/devtools", never]]
>(
  devtools(
    (setState, getState) => ({
      isOpen: false,
      href: "",
      videoSrc: "",
      isVideoModalOpen: false,
      setIsOpen: (value) => {
        setState(
          {
            isOpen: true,
            href: value,
          },
          false,
          { type: "setIsOpen", value }
        );
      },
      setIsClosed: () => {
        setState(
          {
            isOpen: false,
            href: "",
          },
          false,
          { type: "setIsClosed" }
        );
      },
      setVideoModalOpen: (src: string) => {
        setState(
          {
            isVideoModalOpen: true,
            videoSrc: src,
          },
          false,
          { type: "setVideoModalOpen" }
        );
      },
      setVideoModalClosed: () => {
        setState(
          {
            isVideoModalOpen: false,
            videoSrc: "",
          },
          false,
          { type: "setVideoModalClosed" }
        );
      },
    }),
    { name: "previewStore" }
  )
);

export const useModalStore = () =>
  modalStore(
    ({
      isOpen,
      setIsOpen,
      setIsClosed,
      href,
      isVideoModalOpen,
      setVideoModalClosed,
      setVideoModalOpen,
      videoSrc,
    }) => ({
      href,
      isOpen,
      setIsOpen,
      setIsClosed,
      isVideoModalOpen,
      setVideoModalClosed,
      setVideoModalOpen,
      videoSrc,
    }),

    shallow
  );
