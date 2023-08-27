import { FC, ReactNode } from "react";

interface TextHeadingSecondaryProps {
  children: ReactNode;
  heading?: string;
}

const TextHeadingSecondary: FC<TextHeadingSecondaryProps> = ({
  children,
  heading,
}) => {
  return (
    <span className="grid gap-y-2">
      <h6 className="uppercase text-blue-800 font-[300] font-poppins leading-body text-sm tracking-widest">
        {heading}
      </h6>
      <h3 className="text-header-sm font-prata leading-header text-blue-800">
        {children}
      </h3>
    </span>
  );
};

export default TextHeadingSecondary;
