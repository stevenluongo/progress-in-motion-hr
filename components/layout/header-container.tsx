import { twMerge } from "tailwind-merge";

type HeaderContainerProps = React.HTMLProps<HTMLDivElement>;

const HeaderContainer = ({ children, className }: HeaderContainerProps) => {
  return (
    <div
      className={twMerge(
        "flex flex-col gap-2 items-center md:items-start",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HeaderContainer;
