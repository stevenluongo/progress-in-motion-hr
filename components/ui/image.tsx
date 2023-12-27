import { default as NextImage } from "next/image";
import { forwardRef } from "react";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className }, ref) => {
    return (
      <NextImage
        ref={ref}
        className={className}
        fill
        src={src}
        alt={alt}
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    );
  }
);

export default Image;

Image.displayName = "Image";
