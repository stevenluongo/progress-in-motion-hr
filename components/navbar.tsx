"use client";

import React, { useCallback, useState } from "react";
import Button from "./ui/button";
import HrccLogo from "@/public/horizontal.svg";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { NavbarMenu } from "./navbar/navbar-menu";
import NavbarMenuItem from "./navbar/navbar-menu-item";
import { useScrolled } from "@/hooks/useScrolled";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isScrolled = useScrolled();

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav
      className={twMerge(
        "z-50 w-full fixed left-0 right-0 transition-all duration-300 text-sm select-none",
        isScrolled ? "bg-blue-900 text-white fill-white" : isMenuOpen ? "bg-transparent text-gray-700 fill-gray-700" : "bg-transparent text-white fill-white"
      )}
    >
      <div className="flex container px-8 mx-auto relative justify-between sm:justify-center items-center h-16">
        <div className="absolute left-8">
          <div className="relative">
            <p onClick={toggleMenu} className="absolute left-0 top-0 bottom-0 right-0 m-auto hidden sm:flex font-extralight tracking-[1px] font-kumbh gap-x-2 items-center cursor-pointer">
              Menu
              <FontAwesomeIcon icon={faCaretDown} />
            </p>
          </div>
        </div>
        <span className=" w-[140px] py-1">
          <HrccLogo />
        </span>
        <div
          className="sm:hidden cursor-pointer select-none"
          onClick={toggleMenu}
        >
          <FontAwesomeIcon id="menu-button" icon={faBars} />
        </div>

        <Button
          light={!isScrolled && !isMenuOpen}
          className="absolute right-8 hidden sm:block transition-all duration-300"
          small
        >
          Contact
        </Button>
      </div>
      <NavbarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}>
        <NavbarMenuItem to="twenty-six-north">26 North</NavbarMenuItem>
        <NavbarMenuItem to="driving-range">Driving Range</NavbarMenuItem>
        <NavbarMenuItem to="main-lobby">Main Lobby</NavbarMenuItem>
        <NavbarMenuItem to="bar-lounge">Bar & Lounge</NavbarMenuItem>
        <NavbarMenuItem to="east-course">East Course</NavbarMenuItem>
        <NavbarMenuItem to="main-dining-room">Main Dining Room</NavbarMenuItem>
      </NavbarMenu>
    </nav>
  );
};

export default Navbar;
