import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type ContentWrapperProps = React.HTMLProps<HTMLDivElement>;

const ContentWrapper = forwardRef<HTMLDivElement, ContentWrapperProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "grid  md:grid-cols-2  md:justify-start gap-8  lg:gap-16 items-center",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default ContentWrapper;

ContentWrapper.displayName = "ContentWrapper";
