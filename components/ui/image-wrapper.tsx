import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const ImageWrapper = ({
  children,
  secondary,
  className,
}: {
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "relative w-full h-[300px] xl:h-[340px] 2xl:h-[400px]",
        secondary && "w-[60%] 2xl:w-1/2 opacity-70",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ImageWrapper;
