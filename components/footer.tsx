"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import HrccLogo from "@/public/horizontal.svg";
import { executeScroll } from "@/utils/scroll";
import { motion } from "framer-motion";
import { useAnimationInView } from "@/hooks/useAnimationInView";
import { MotionContainer } from "./motion";
import Link from "next/link";

export const Footer = () => {
  const { ref, controls } = useAnimationInView({
    delay: 500,
    margin: "-150px -150px",
  });
  return (
    <motion.footer className="py-16 overflow-x-hidden bg-blue-900">
      <MotionContainer
        ref={ref}
        animate={controls}
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              type: "linear",
              duration: 2,
              ease: "easeOut",
            },
          },
        }}
        className="text-blue-100-alpha text-sm"
      >
        <FooterHorizontalRule />
        <div className="grid sm:grid-cols-[1fr_1fr] md:grid-cols-[1fr_min-content_min-content] lg:grid-cols-[1fr_min-content_min-content_min-content] w-full gap-x-12 h-full items-stretch my-8">
          <address className="flex flex-col gap-y-4 whitespace-nowrap font-extralight w-full">
            <span className="fill-white w-[140px] py-1">
              <HrccLogo />
            </span>
            <p>
              3500 Clubhouse Lane
              <br /> Boynton Beach, FL 33436
            </p>
            <FooterLink
              ariaLabel="Call us at 561-737-CLUB (2582)"
              href="tel:561-737-2582"
              className="flex gap-x-2 items-center"
            >
              <FontAwesomeIcon icon={faPhone} />
              <p>561-737-CLUB (2582)</p>
            </FooterLink>
            <FooterLink
              ariaLabel="Email us at membership@huntersrun.net"
              href="tel:561-737-2582"
              className="flex gap-x-2 items-center"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              <p>Membership@huntersrun.net</p>
            </FooterLink>
          </address>

          <div className="flex flex-col">
            <FooterHorizontalRule className="sm:hidden my-8" />
            <div className="flex items-stretch h-full">
              <FooterVerticalRule className="hidden sm:block" />
              <div className="flex sm:ml-8 flex-col gap-y-3 whitespace-nowrap font-extralight w-full">
                <FooterHeader>Renovations</FooterHeader>
                <FooterScrollLink to="twenty-six-north">
                  26 North
                </FooterScrollLink>
                <FooterScrollLink to="driving-range">
                  Driving Range
                </FooterScrollLink>
                <FooterScrollLink to="main-lobby">Main Lobby</FooterScrollLink>
                <FooterScrollLink to="bar-lounge">Bar Lounge</FooterScrollLink>
                <FooterScrollLink to="east-course">
                  East Course
                </FooterScrollLink>
                <FooterScrollLink to="main-dining-room">
                  Main Dining Room
                </FooterScrollLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <FooterHorizontalRule className="md:hidden my-8" />
            <div className="flex items-stretch h-full">
              <FooterVerticalRule className="hidden md:block" />
              <div className="flex ml-0 md:ml-8 flex-col gap-y-3 whitespace-nowrap font-extralight w-full">
                <FooterHeader>Club Info</FooterHeader>
                <FooterLink
                  ariaLabel="View the club location"
                  href="https://www.huntersrun.net/location"
                >
                  Location
                </FooterLink>
                <FooterLink
                  ariaLabel="View the club contact information"
                  href="https://www.huntersrun.net/contact-info"
                >
                  Contact Info
                </FooterLink>
                <FooterLink
                  ariaLabel="View the club careers"
                  href="https://www.huntersrun.net/careers"
                >
                  Careers
                </FooterLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <FooterHorizontalRule className="lg:hidden my-8" />
            <div className="flex items-stretch h-full">
              <FooterVerticalRule className="hidden sm:block md:hidden lg:block" />
              <div className="flex sm:ml-8 md:ml-0 lg:ml-8 flex-col gap-y-3 whitespace-nowrap font-extralight w-full">
                <FooterHeader>Membership</FooterHeader>

                <FooterLink
                  ariaLabel="View the club membership benefits"
                  href="https://www.huntersrun.net/contact-membership"
                >
                  Contact Membership
                </FooterLink>
              </div>
            </div>
          </div>
        </div>
        <FooterHorizontalRule />
        <div className="flex flex-col sm:flex-row gap-y-8 items-center justify-between mt-12">
          <p>Copyright © 2023 Hunters Run Country Club | All Rights Reserved</p>
          <span className="flex gap-x-8 items-center text-base">
            <SocialMediaIcon
              ariaLabel="View the club facebook page"
              icon={faFacebookF}
              href="https://www.facebook.com/HuntersRunCC/"
            />
            <SocialMediaIcon
              ariaLabel="View the club linkedin page"
              icon={faLinkedinIn}
              href="https://www.linkedin.com/company/hunters-run-cc"
            />
            <SocialMediaIcon
              ariaLabel="View the club youtube page"
              icon={faYoutube}
              href="https://www.youtube.com/channel/UCWzApG8mcavd10GxsDUuQ6Q"
            />
            <SocialMediaIcon
              ariaLabel="View the club instagram page"
              icon={faInstagram}
              href="https://www.instagram.com/huntersruncc/"
            />
          </span>
        </div>
      </MotionContainer>
    </motion.footer>
  );
};

const FooterLink = ({
  children,
  href,
  className,
  ariaLabel,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  ariaLabel: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={twMerge(
        "hover:text-blue-100 transition-all duration-150",
        className
      )}
      aria-label={ariaLabel}
    >
      {children}
    </Link>
  );
};

const FooterScrollLink = ({
  to,
  children,
}: {
  to: string;
  children: ReactNode;
}) => {
  return (
    <p
      className="hover:text-blue-100 cursor-pointer transition-all duration-150"
      onClick={() => executeScroll({ to })}
    >
      {children}
    </p>
  );
};

const FooterHorizontalRule = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "bg-[#f0f6fc3d] h-[1px] w-full border-none outline-none",
        className
      )}
    />
  );
};

const FooterVerticalRule = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "bg-[#f0f6fc3d] w-[1px] border-none outline-none",
        className
      )}
    />
  );
};

const FooterHeader = ({ children }: { children: ReactNode }) => {
  return (
    <p className="text-white uppercase tracking-[2px] font-extralight">
      {children}
    </p>
  );
};

const SocialMediaIcon = ({
  icon,
  href,
  ariaLabel,
}: {
  icon: IconProp;
  href: string;
  ariaLabel: string;
}) => {
  return (
    <Link
      target="_blank"
      href={href}
      aria-label={ariaLabel}
      className="cursor-pointer hover:text-blue-100 transition-all duration-150"
    >
      <FontAwesomeIcon icon={icon} />
    </Link>
  );
};
