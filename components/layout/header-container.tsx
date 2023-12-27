import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

type HeaderContainerProps = React.HTMLProps<HTMLDivElement>;

const HeaderContainer = forwardRef<HTMLDivElement, HeaderContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "flex flex-col gap-2 items-center md:items-start",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

export default HeaderContainer;

HeaderContainer.displayName = "HeaderContainer";
