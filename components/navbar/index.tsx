"use client";

import React, { useCallback, useState } from "react";
import HrccLogo from "@/public/horizontal.svg";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useScrolled } from "@/hooks/useScrolled";
import ReactModal from "react-modal";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import Link from "next/link";
import { NavbarMenu } from "./navbar-menu";
import NavbarMenuItem from "./navbar-menu-item";
import Button from "../ui/button";

ReactModal.setAppElement("#root");

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isScrolled = useScrolled();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <motion.nav
      animate={{ y: 0 }}
      initial={{ y: -100 }}
      transition={{
        type: "spring",
        damping: 25,
        mass: 0.75,
        stiffness: 80,
      }}
      className={twMerge(
        "z-50 w-full fixed left-0 right-0 text-sm select-none transition-[background-color] duration-300",
        isScrolled
          ? "bg-blue-900 text-white fill-white"
          : isMenuOpen
          ? "bg-transparent text-gray-700 fill-gray-700"
          : "bg-transparent text-white fill-white"
      )}
    >
      <div
        className="cursor-pointer sm:cursor-auto flex container px-8 mx-auto relative justify-between sm:justify-center items-center h-16"
        onClick={() => isMobile && toggleMenu()}
      >
        <div className="absolute left-8">
          <div className="relative">
            <p
              onClick={toggleMenu}
              className="absolute left-0 top-0 bottom-0 right-0 m-auto hidden sm:flex font-extralight tracking-[1px] font-kumbh gap-x-2 items-center cursor-pointer"
            >
              Menu
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </div>
        </div>
        <span className=" w-[140px] py-1">
          <HrccLogo />
        </span>
        <div className="sm:hidden cursor-pointer select-none">
          <FontAwesomeIcon id="menu-button" icon={faBars} />
        </div>
        <Link
          href="https://www.huntersrun.net/contact-info"
          className="absolute right-8 hidden sm:block "
          target="_blank"
          aria-label="Contact Us"
        >
          <Button
            light={!isScrolled && !isMenuOpen}
            small
            className="transition-all duration-300"
          >
            Contact
          </Button>
        </Link>
      </div>
      <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <NavbarMenuItem to="twenty-six-north">26 North</NavbarMenuItem>
        <NavbarMenuItem to="driving-range">Driving Range</NavbarMenuItem>
        <NavbarMenuItem to="main-lobby">Main Lobby</NavbarMenuItem>
        <NavbarMenuItem to="bar-lounge">Bar & Lounge</NavbarMenuItem>
        <NavbarMenuItem to="east-course">East Course</NavbarMenuItem>
        <NavbarMenuItem to="main-dining-room">Main Dining Room</NavbarMenuItem>
      </NavbarMenu>
    </motion.nav>
  );
};

export default Navbar;
