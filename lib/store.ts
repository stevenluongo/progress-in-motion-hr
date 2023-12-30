import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ModalStoreProps {
  isOpen: boolean;
  setIsOpen: (href: string) => void;
  setIsClosed: () => void;
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
    }),
    { name: "previewStore" }
  )
);

export const useModalStore = () =>
  modalStore(
    ({ isOpen, setIsOpen, setIsClosed, href }) => ({
      href,
      isOpen,
      setIsOpen,
      setIsClosed,
    }),

    shallow
  );
