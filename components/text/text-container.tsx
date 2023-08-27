import React, { Fragment } from "react";
import { FC, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface TextContainerProps {
  children: ReactNode[];
  className?: string;
  light?: boolean;
}

const TextContainer: FC<TextContainerProps> = ({
  children,
  className,
  light,
}) => {
  return (
    <div
      className={twMerge(
        `flex flex-col gap-y-8 w-full items-center md:items-start text-center md:text-left`,
        className
      )}
    >
      {light
        ? children.map((child, index) => (
            <Fragment key={index}>
              {React.cloneElement(child as React.ReactElement, {
                light: true,
              })}
            </Fragment>
          ))
        : children}
    </div>
  );
};

export default TextContainer;
