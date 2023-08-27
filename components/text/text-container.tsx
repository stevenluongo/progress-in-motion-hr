import { FC, ReactNode } from "react";

interface TextContainerProps {
  children: ReactNode;
}

const TextContainer: FC<TextContainerProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-8 w-full items-center md:items-start text-center md:text-left">
      {children}
    </div>
  );
};

export default TextContainer;
