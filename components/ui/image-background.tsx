import { twMerge } from "tailwind-merge";

type ImageBackgroundProps = {
  className?: string;
};

const ImageBackground = ({ className }: ImageBackgroundProps) => {
  return (
    <div
      className={twMerge(
        "absolute w-full h-full md:h-[calc(100%+80px)] -bottom-10 md:bottom-0 md:-top-10 -left-10 bg-blue-100",
        className
      )}
    />
  );
};

export default ImageBackground;
