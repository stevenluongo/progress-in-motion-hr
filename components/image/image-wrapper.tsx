import { forwardRef } from "react";
import { twMerge } from "@/tailwind.config";
import { ImageWrapperProps } from "./image";
import { motion } from "framer-motion";

const ImageWrapper = motion(
  forwardRef<HTMLDivElement, ImageWrapperProps>(function fn(
    { children, light, full },
    ref
  ) {
    return (
      <div
        className={twMerge(
          "h-[300px] md:h-[360px] w-full relative",
          light && "border-2 border-white shadow-image",
          full && "h-full"
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  })
);

export default ImageWrapper;
