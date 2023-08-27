import { FC } from "react";
import { twMerge } from "@/tailwind.config";
import { ButtonPrimaryProps } from "./button";

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children, light }) => {
  return (
    <button
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
