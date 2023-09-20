import { FC } from "react";
import { ContentWrapperProps } from "./content";
import { twMerge } from "@/tailwind.config";

const ContentWrapper: FC<ContentWrapperProps> = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "max-w-[80rem] h-full m-auto px-8 grid gap-y-[300px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
