import { default as NextImage } from "next/image";
import { FC } from "react";
import { ImageProps } from "./image";

const Image: FC<ImageProps> = ({ src, alt }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      fill
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
    />
  );
};

export default Image;
