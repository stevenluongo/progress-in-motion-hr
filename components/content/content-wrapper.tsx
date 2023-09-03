import { FC } from "react";
import { ContentWrapperProps } from "./content";

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[80rem] h-full m-auto px-8 grid gap-y-[300px]">
      {children}
    </div>
  );
};

export default ContentWrapper;
