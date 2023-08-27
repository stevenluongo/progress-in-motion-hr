import React, { Fragment } from "react";
import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { TextContainerProps } from "./text";

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
