import { ReactNode } from "react";

const ImageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative w-[60%] h-[400px] 2xl:w-1/2 opacity-70">
      {children}
    </div>
  );
};

export default ImageWrapper;
