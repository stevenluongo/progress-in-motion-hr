import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type TextContainerProps = React.HTMLProps<HTMLDivElement>;

const TextContainer = forwardRef<HTMLDivElement, TextContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "flex flex-col gap-y-6 2xl:gap-y-8 items-center md:items-start",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default TextContainer;

TextContainer.displayName = "TextContainer";
