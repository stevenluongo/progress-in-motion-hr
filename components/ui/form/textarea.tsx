import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TextAreaProps = React.HTMLProps<HTMLTextAreaElement> & {
  isError?: boolean;
};

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ placeholder, isError, rows = 1, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        placeholder={placeholder}
        rows={rows}
        className={` placeholder:text-[#737373] resize-none text-dark focus:bg-white border border-gray-300 text-sm rounded-md block w-full ps-10 p-2.5 outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-[150ms] ${twMerge(
          isError ? "border-red-500 focus:ring-red-500 " : "focus:ring-primary"
        )}`}
        {...props}
      />
    );
  }
);

export default TextArea;

TextArea.displayName = "TextArea";
