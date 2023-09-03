import { twMerge } from "@/tailwind.config";
import { forwardRef } from "react";
import { TextHeadingSecondaryProps } from "./text";
import { motion } from "framer-motion";

const TextHeadingSecondary = motion(
  forwardRef<HTMLSpanElement, TextHeadingSecondaryProps>(function fn(
    { children, heading, light, className },
    ref
  ) {
    return (
      <span ref={ref} className={twMerge("grid gap-y-2", className)}>
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
  })
);

export default TextHeadingSecondary;
