import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={twMerge("container mx-auto px-8", className)}>
      {children}
    </div>
  );
};

export default Container;
