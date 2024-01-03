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
      className={`absolute w-full pt-16 transition-all duration-200 z-40 divide-y flex flex-col items-center rounded-md rounded-t-none shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${twMerge(
        isScrolled
          ? "bg-blue-900 divide-[#f0f6fc3d]"
          : "divide-gray-100 bg-white",
        className
      )}`}
      overlayClassName="bg-black bg-opacity-50 fixed top-0 left-0 right-0 bottom-0 z-30"
    >
      <>
        <hr className="border-0 border-none outline-none h-[1px] w-full" />
        {children.map((child, index) =>
          child.type === NavbarMenuItem
            ? React.cloneElement(child, {
                set: () => setIsMenuOpen(false),
                isScrolled,
                key: child.key || index,
              })
            : null
        )}
      </>
    </ReactModal>
  );
});

NavbarMenu.displayName = "NavbarMenu";
