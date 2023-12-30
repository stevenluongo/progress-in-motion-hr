import { devtools } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface ModalStoreProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  toggleStore: () => void;
}

export const modalStore = createWithEqualityFn<
  ModalStoreProps,
  [["zustand/devtools", never]]
>(
  devtools(
    (setState, getState) => ({
      isOpen: false,
      setIsOpen: (value) => {
        setState(
          {
            isOpen: value,
          },
          false,
          { type: "setIsOpen", value }
        );
      },
      toggleStore: () => {
        setState(
          (state) => ({
            isOpen: !state.isOpen,
          }),
          false,
          { type: "toggleStore" }
        );
      },
    }),
    { name: "previewStore" }
  )
);

export const useModalStore = () =>
  modalStore(
    ({ isOpen, setIsOpen, toggleStore }) => ({
      isOpen,
      setIsOpen,
      toggleStore,
    }),

    shallow
  );
