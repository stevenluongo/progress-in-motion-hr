import { FC, ReactNode } from "react";

interface ContentWrapperProps {
  children: ReactNode;
}

const ContentWrapper: FC<ContentWrapperProps> = ({ children }) => {
  return (
    <div className="max-w-[80rem] h-full m-auto px-8 grid gap-y-[200px]">
      {children}
    </div>
  );
};

export default ContentWrapper;