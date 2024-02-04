import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ModalStoreProps {
  isOpen: boolean;
  setIsOpen: (href: string) => void;
  setIsClosed: () => void;
  isVideoModalOpen: boolean;
  setVideoModalOpen: () => void;
  setVideoModalClosed: () => void;
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
      setVideoModalOpen: () => {
        setState(
          {
            isVideoModalOpen: true,
          },
          false,
          { type: "setVideoModalOpen" }
        );
      },
      setVideoModalClosed: () => {
        setState(
          {
            isVideoModalOpen: false,
            href: "",
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
    }) => ({
      href,
      isOpen,
      setIsOpen,
      setIsClosed,
      isVideoModalOpen,
      setVideoModalClosed,
      setVideoModalOpen,
    }),

    shallow
  );
