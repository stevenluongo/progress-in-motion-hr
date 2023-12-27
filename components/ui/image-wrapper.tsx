import { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ImageWrapperProps = {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
};

const ImageWrapper = forwardRef<HTMLDivElement, ImageWrapperProps>(
  ({ children, secondary, className }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "relative w-full h-[300px] xl:h-[340px] 2xl:h-[400px]",
          secondary && "w-[60%] 2xl:w-1/2 opacity-70",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default ImageWrapper;

ImageWrapper.displayName = "ImageWrapper";
