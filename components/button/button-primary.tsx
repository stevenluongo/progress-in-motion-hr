import { FC, ReactNode } from "react";

interface ButtonPrimaryProps {
  children: ReactNode;
}

const ButtonPrimary: FC<ButtonPrimaryProps> = ({ children }) => {
  return (
    <button className="w-fit px-4 py-3 bg-blue-600 text-white uppercase font-poppins leading-body text-xs font-[600] tracking-[.245rem]">
      {children}
    </button>
  );
};

export default ButtonPrimary;
