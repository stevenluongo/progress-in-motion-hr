import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextBodyProps {
  children: ReactNode;
  className?: string;
  light?: boolean;
}

const TextBody: FC<TextBodyProps> = ({ children, className, light }) => {
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
