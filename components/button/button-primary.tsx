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
        "w-fit px-4 py-3 bg-blue-600 text-white uppercase font-poppins leading-body text-xs font-[600] tracking-[.245rem]",
        light && "bg-transparent border border-white"
      )}
    >
      {children}
    </button>
  );
};

export default ButtonPrimary;
