import { FC, ReactNode } from "react";
import { twMerge } from "@/tailwind.config";

interface ImageWrapperProps {
  children: ReactNode;
  light?: boolean;
  full?: boolean;
}

const ImageWrapper: FC<ImageWrapperProps> = ({ children, light, full }) => {
  return (
    <div
      className={twMerge(
        "h-[300px] md:h-[360px] w-full relative",
        light && "border-2 border-white shadow-image",
        full && "h-full"
      )}
    >
      {children}
    </div>
  );
};

export default ImageWrapper;
