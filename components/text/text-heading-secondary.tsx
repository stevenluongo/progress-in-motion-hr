import { twMerge } from "@/tailwind.config";
import { FC, ReactNode } from "react";

interface TextHeadingSecondaryProps {
  children: ReactNode;
  heading?: string;
  light?: boolean;
}

const TextHeadingSecondary: FC<TextHeadingSecondaryProps> = ({
  children,
  heading,
  light,
}) => {
  return (
    <span className="grid gap-y-2">
      <h6
        className={twMerge(
          "uppercase text-blue-800 font-[300] font-poppins leading-body text-sm tracking-widest",
          light && "text-white"
        )}
      >
        {heading}
      </h6>
      <h3
        className={twMerge(
          "text-header-sm font-prata leading-header text-blue-800",
          light && "text-white"
        )}
      >
        {children}
      </h3>
    </span>
  );
};

export default TextHeadingSecondary;
