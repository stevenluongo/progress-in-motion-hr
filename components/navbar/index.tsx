"use client";

// Organized and grouped imports.
import React, { useCallback, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ReactModal from "react-modal";
import { twMerge } from "tailwind-merge";

// Relative imports.
import HrccLogo from "@/public/horizontal.svg";
import Button from "../common/button";
import { useScrolled } from "@/hooks/useScrolled";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { NavbarMenu } from "./navbar-menu";
import NavbarMenuItem from "./navbar-menu-item";
import { executeScroll } from "@/utils/scroll";

// Set app element for accessibility.
ReactModal.setAppElement("#root");

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isScrolled = useScrolled();

  const isMobile = useMediaQuery("(max-width: 640px)");

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const navbarClassName = twMerge(
    "z-50 w-full fixed left-0 right-0 text-sm select-none transition-[background-color] duration-300",
    isScrolled
      ? "bg-blue-900 text-white fill-white"
      : isMenuOpen
      ? "bg-transparent text-gray-700 fill-gray-700"
      : "bg-transparent text-white fill-white"
  );

  return (
    <>
      <nav className={navbarClassName}>
        <div
          className="cursor-pointer sm:cursor-auto flex container px-8 mx-auto relative justify-between sm:justify-center items-center h-16"
          onClick={() => isMobile && toggleMenu()}
        >
          <MenuButton toggleMenu={toggleMenu} />
          <Logo />
          <HamburgerIcon />
          <ContactButton isScrolled={isScrolled} isMenuOpen={isMenuOpen} />
        </div>
        <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
          <NavbarMenuItem to="east-course">East Course</NavbarMenuItem>
          <NavbarMenuItem to="driving-range">Driving Range</NavbarMenuItem>
          <NavbarMenuItem to="twenty-six-north">26 North</NavbarMenuItem>
          <NavbarMenuItem to="main-lobby">Main Lobby</NavbarMenuItem>
          <NavbarMenuItem to="fitness">Fitness</NavbarMenuItem>
          <NavbarMenuItem to="bar-lounge">Bar & Lounge</NavbarMenuItem>
          <NavbarMenuItem to="main-dining-room">
            Main Dining Room
          </NavbarMenuItem>
        </NavbarMenu>
      </nav>
      <Banner />
    </>
  );
};

export default Navbar;

const ContactButton: React.FC<{ isScrolled: boolean; isMenuOpen: boolean }> = ({
  isScrolled,
  isMenuOpen,
}) => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -240 }}
      transition={{
        type: "spring",
        damping: 40,
        mass: 1,
        stiffness: 100,
      }}
      className="absolute right-8 hidden sm:block "
    >
      <Link
        href="https://www.huntersrun.net/contact-info"
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
    </motion.div>
  );
};

const Logo: React.FC = () => {
  return (
    <motion.span
      animate={{ y: 0 }}
      initial={{ y: -160 }}
      transition={{
        type: "spring",
        damping: 35,
        mass: 0.75,
        stiffness: 100,
      }}
      className=" w-[140px] py-1"
    >
      <HrccLogo />
    </motion.span>
  );
};

const MenuButton: React.FC<{ toggleMenu: () => void }> = ({ toggleMenu }) => {
  return (
    <div className="absolute left-8">
      <motion.div
        animate={{ y: 0 }}
        initial={{ y: -80 }}
        transition={{
          type: "spring",
          damping: 25,
          mass: 0.75,
          stiffness: 80,
        }}
        className="relative"
      >
        <p
          onClick={toggleMenu}
          className="absolute left-0 top-0 bottom-0 right-0 m-auto hidden sm:flex font-extralight tracking-[1px] font-kumbh gap-x-2 items-center cursor-pointer"
        >
          Menu
          <FontAwesomeIcon icon={faCaretDown} />
        </p>
      </motion.div>
    </div>
  );
};

const HamburgerIcon: React.FC = () => {
  return (
    <motion.div
      animate={{ y: 0 }}
      initial={{ y: -240 }}
      transition={{
        type: "spring",
        damping: 35,
        mass: 0.75,
        stiffness: 100,
      }}
      className="sm:hidden cursor-pointer select-none"
    >
      <FontAwesomeIcon id="menu-button" icon={faBars} />
    </motion.div>
  );
};

const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
        delay: 0.3,
      }}
      className="bg-blue-500 font-sans text-white py-2 text-center font-medium fixed w-full z-40 mt-16"
    >
      <div className="container mx-auto px-4 relative">
        <p>
          Exciting News! Our new Racquet Sports Complex is underway!
          <a
            onClick={() => executeScroll({ to: "racquet-complex" })}
            className="underline ml-1 hover:text-green-100 transition-colors cursor-pointer"
          >
            Learn more
          </a>
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-green-100 transition-colors"
          aria-label="Close banner"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </motion.div>
  );
};
