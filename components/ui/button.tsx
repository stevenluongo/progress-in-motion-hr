import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
  icon?: IconProp;
  secondary?: boolean;
  light?: boolean;
  small?: boolean;
  large?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, icon, secondary, light, className, small, onClick }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={twMerge(
          "bg-transparent transition-all duration-300 outline-none px-4 py-[10px] border text-blue-primary uppercase justify-center xs:justify-start font-kumbh font-semibold tracking-[.25rem] flex gap-x-4 items-center [&>svg]:w-[20px]",
          secondary
            ? light
              ? "border-transparent hover:border-white"
              : "border-transparent hover:border-blue-primary"
            : light
            ? "border-white hover:bg-white text-white hover:text-blue-primary"
            : "border-blue-primary hover:bg-blue-primary hover:text-white hover:fill-white hover:drop-shadow-xl",
          light ? "fill-white" : "fill-blue-primary",
          small ? "text-[10px]" : "text-[10px]",
          className
        )}
      >
        {children}
        {icon ? (
          <FontAwesomeIcon style={{ width: 16, height: 16 }} icon={icon} />
        ) : null}
      </button>
    );
  }
);

export default Button;

Button.displayName = "Button";
