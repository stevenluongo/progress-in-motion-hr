import { FC } from "react";
import { twMerge } from "@/tailwind.config";
import { ButtonPrimaryProps } from "./button";
import { scroller } from "react-scroll";

const ButtonPrimary: FC<ButtonPrimaryProps> = ({
  children,
  light,
  onClick,
  scrollTo,
  offset = 0,
}) => {
  const executeScroll = () => {
    scroller.scrollTo(scrollTo as string, {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset,
    });
  };
  return (
    <button
      onClick={onClick ? onClick : scrollTo ? executeScroll : undefined}
      className={twMerge(
        "w-fit px-4 py-3 bg-blue-600 text-white uppercase font-poppins leading-body text-xs font-[600] tracking-[.245rem] ",
        "inline-flex items-center justify-center text-white  bg-blue-600 border border-blue-700 rounded-sm shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
        light &&
          "bg-transparent border border-white focus:ring-white focus:ring-offset-blue focus:ring-offset-[3px] focus:ring-1"
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
