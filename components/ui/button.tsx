import { twMerge } from "tailwind-merge";
import ButtonIcons, { ButtonIconsLiteral } from "./icons/button";

type ButtonProps = {
  icon?: ButtonIconsLiteral;
  secondary?: boolean;
  light?: boolean;
  small?: boolean;
  large?: boolean;
} & React.HTMLProps<HTMLButtonElement>;

const Button = ({
  children,
  icon,
  secondary,
  light,
  className,
  small,
  onClick,
}: ButtonProps) => {
  const Icon = icon ? ButtonIcons[icon] : null;
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "bg-transparent outline-none px-4 py-[10px] border transition-all duration-300 text-blue-primary uppercase justify-center xs:justify-start font-kumbh font-semibold tracking-[.25rem] flex gap-x-4 items-center [&>svg]:w-[20px]",
        secondary
          ? light
            ? "border-transparent hover:border-white"
            : "border-transparent hover:border-blue-primary"
          : light
          ? "border-white hover:bg-white text-white hover:text-blue-primary hover:scale-[1.03]"
          : "border-blue-primary hover:bg-blue-primary hover:text-white hover:fill-white hover:drop-shadow-xl hover:scale-[1.03]",
        light ? "fill-white" : "fill-blue-primary",
        small ? "text-[10px]" : "text-[10px]",
        className
      )}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
};

export default Button;
