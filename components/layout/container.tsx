import { ReactNode, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const Container = forwardRef<
  HTMLDivElement,
  { children: ReactNode; className?: string }
>(({ children, className }, ref) => {
  return (
    <div ref={ref} className={twMerge("container mx-auto px-8", className)}>
      {children}
    </div>
  );
});

export default Container;

Container.displayName = "Container";
