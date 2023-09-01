import React, { Fragment, forwardRef, FC } from "react";
import { twMerge } from "tailwind-merge";
import { TextContainerProps } from "./text";
import { motion } from "framer-motion";

const TextContainer = motion(
  forwardRef<HTMLDivElement, TextContainerProps>(function fn(
    { className, light, children },
    ref
  ) {
    return (
      <div
        ref={ref}
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
  })
);

export default TextContainer;
