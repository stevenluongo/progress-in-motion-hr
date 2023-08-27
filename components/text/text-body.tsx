import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { TextBaseProps } from "./text";

const TextBody: FC<TextBaseProps> = ({ children, className, light }) => {
  return (
    <p
      className={twMerge(
        `leading-body text-body`,
        light ? "text-white" : "text-blue-700",
        className
      )}
    >
      {children}
    </p>
  );
};

export default TextBody;
