import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { twMerge } from "tailwind-merge";

type FormButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  children: React.ReactNode;
};

export default function FormButton({
  type,
  children,
  className,
  ...props
}: FormButtonProps) {
  return (
    <button
      className={twMerge(
        "text-white bg-blue-900 font-medium rounded-md text-sm px-5 py-3 w-fit",
        className
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
