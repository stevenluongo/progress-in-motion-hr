import { default as NextImage } from "next/image";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
};

const Image = forwardRef<HTMLImageElement, ImageProps>(
  ({ src, alt, className, priority }, ref) => {
    return (
      <NextImage
        ref={ref}
        className={twMerge("rounded-sm", className)}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        src={src}
        alt={alt}
        priority={priority}
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
