import { FC } from "react";
import { twMerge } from "@/tailwind.config";
import { TextHeadingPrimaryProps } from "./text";

const TextHeadingPrimary: FC<TextHeadingPrimaryProps> = ({
  number,
  children,
  light,
}) => {
  return (
    <span className="grid gap-y-2">
      <h4
        className={twMerge(
          `font-prata leading-header text-header-xs hidden md:block`,
          light ? "text-[#ffffff80]" : "text-[#3a627b80]"
        )}
      >
        0{number}
      </h4>
      <h2
        className={twMerge(
          "text-header-xs md:text-header-md font-prata leading-header uppercase",
          light ? "text-white" : "text-blue-800"
        )}
      >
        {children}
      </h2>
    </span>
  );
};

export default TextHeadingPrimary;
