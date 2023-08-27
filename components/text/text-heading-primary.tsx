import { FC, ReactNode } from "react";

interface TextHeadingPrimaryProps {
  children: ReactNode;
  number: number;
}

const TextHeadingPrimary: FC<TextHeadingPrimaryProps> = ({
  number,
  children,
}) => {
  return (
    <span className="grid gap-y-2">
      <h4 className="text-header-xs font-prata leading-header text-[#3a627b80]">
        0{number}
      </h4>
      <h2 className="text-header-xs md:text-header-md font-prata leading-header text-blue-800 ">
        {children}
      </h2>
    </span>
  );
};

export default TextHeadingPrimary;
