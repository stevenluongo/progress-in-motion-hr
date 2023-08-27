import { FC, ReactNode } from "react";

const ImageWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="h-[300px] md:h-[360px] w-full relative">{children}</div>
  );
};

export default ImageWrapper;
