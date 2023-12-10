import { default as NextImage } from "next/image";
import { twMerge } from "tailwind-merge";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image = ({ src, alt, className }: ImageProps) => {
  return (
    <NextImage
      className={twMerge(className)}
      fill
      src={src}
      alt={alt}
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
};

export default Image;
