import { twMerge } from "tailwind-merge";

type TextContainerProps = React.HTMLProps<HTMLDivElement>;

const TextContainer = ({ children, className }: TextContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-y-6 2xl:gap-y-8 items-center md:items-start",
        className
      )}
    >
      {children}
    </div>
  );
};

export default TextContainer;
