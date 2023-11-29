import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { TextBaseProps } from "./text";
import { motion } from "framer-motion";

const TextBody = motion(
  forwardRef<HTMLParagraphElement, TextBaseProps>(function fn(
    { children, className, light },
    ref
  ) {
    return (
      <p
        ref={ref}
        className={twMerge(
          `leading-body text-body 2xl:text-lg`,
          light ? "text-white" : "text-blue-700",
          className
        )}
      >
        {children}
      </p>
    );
  })
);

export default TextBody;
