import React, { useCallback } from "react";
import { executeScroll } from "@/utils/scroll";
import { useScrolled } from "@/hooks/useScrolled";
import { twMerge } from "tailwind-merge";
import Container from "../layout/container";

interface NavbarMenuItemProps {
  set?: (isMenuOpen: boolean) => void;
  children: React.ReactNode;
  to: string;
  isScrolled?: boolean;
}

const NavbarMenuItem: React.FC<NavbarMenuItemProps> = ({
  set,
  children,
  to,
  isScrolled,
}) => {
  const handleMenuClick = useCallback(() => {
    if (set) {
      set(false);
    }
    executeScroll({ to });
  }, [set, to]);

  return (
    <button
      className={twMerge(
        "text-gray-700 py-3 text-sm w-full text-start",
        isScrolled && "text-white"
      )}
      role="menuitem"
      tabIndex={-1}
      onClick={handleMenuClick}
    >
      <div className="container px-8 mx-auto">{children}</div>
    </button>
  );
};

export default NavbarMenuItem;
