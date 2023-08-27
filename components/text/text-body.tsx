import { FC, ReactNode } from "react";

interface TextBodyProps {
  children: ReactNode;
}

const TextBody: FC<TextBodyProps> = ({ children }) => {
  return <p className="leading-body text-blue-700 text-body">{children}</p>;
};

export default TextBody;
