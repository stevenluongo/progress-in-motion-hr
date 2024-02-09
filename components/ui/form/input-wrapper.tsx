import { twMerge } from "tailwind-merge";

type InputWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

const InputWrapper: React.FC<InputWrapperProps> = ({ children, className }) => {
  return (
    <div className={twMerge("flex flex-col gap-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default InputWrapper;
