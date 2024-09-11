import { ReactNode, forwardRef } from "react";

type ButtonGroupProps = { children: ReactNode };

const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        className="flex flex-col sm:flex-row gap-6 justify-between w-full sm:w-fit"
      >
        {children}
      </div>
    );
  }
);

export default ButtonGroup;

ButtonGroup.displayName = "ButtonGroup";
