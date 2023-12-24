import React, { ReactElement } from "react";
import ReactModal from "react-modal";
import { twMerge } from "tailwind-merge";
import NavbarMenuItem from "./navbar-menu-item";
import { useScrolled } from "@/hooks/useScrolled";

type NavbarMenuProps = {
  isMenuOpen: boolean;
  children: ReactElement[];
  setIsMenuOpen: (t: boolean) => void;
  className?: string;
};

export const NavbarMenu = React.memo((props: NavbarMenuProps) => {
  const { isMenuOpen, children, setIsMenuOpen, className } = props;
  const isScrolled = useScrolled();

  return (
    <ReactModal
      isOpen={isMenuOpen}
      onRequestClose={() => setIsMenuOpen(false)}
      className={`absolute w-full transition-all duration-200  sm:w-56 divide-y z-[2000] divide-gray-100 rounded-md rounded-t-none bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${twMerge(
        className,
        isScrolled && "bg-blue-900 divide-[#f0f6fc3d]"
      )}`}
      overlayClassName="YourOverlayClassName" // Add your custom overlay styles here
    >
      {children.map((child, index) =>
        child.type === NavbarMenuItem
          ? React.cloneElement(child, {
              set: () => setIsMenuOpen(false),
              isScrolled,
              key: child.key || index,
            })
          : null
      )}
    </ReactModal>
  );
});
