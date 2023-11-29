import { forwardRef } from "react";
import { ContentWrapperProps } from "./content";
import { twMerge } from "@/tailwind.config";

const ContentWrapper = forwardRef<HTMLDivElement, ContentWrapperProps>(
  ({ children, className }, ref) => {
    return (
      <div
        className={twMerge(
          "container h-full m-auto px-4 sm:px-8 grid gap-y-24 md:gap-y-48",
          className
        )}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

export default ContentWrapper;
