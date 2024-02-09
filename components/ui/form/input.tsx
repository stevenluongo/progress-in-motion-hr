import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = React.HTMLProps<HTMLInputElement> & {
  placeholder: string;
  isError?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, isError, ...props }, ref) => {
    return (
      <input
        ref={ref}
        placeholder={placeholder}
        className={` placeholder:text-[#737373] text-dark focus:bg-white border border-gray-300 text-sm rounded-md block w-full ps-10 p-2.5 outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-[150ms] ${twMerge(
          isError ? "border-red-500 focus:ring-red-500 " : "focus:ring-primary"
        )}`}
        {...props}
      />
    );
  }
);

export default Input;

Input.displayName = "Input";
