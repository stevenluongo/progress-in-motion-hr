import React, { forwardRef } from "react";
import { ContentPanelProps } from "./content";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

/*
This component is a wrapper for each item in the content container.
It takes in a className prop that is used to reverse the order of the children on mobile and desktop.
This prop is passed down from the content container component.

It also takes in a light prop that is used to dynamically change the styles of the children.
This prop is passed down from the content container component.
This prop is further passed down to the children of the content panel component.
*/

// const ContentPanel: FC<ContentPanelProps> = ({

const ContentPanel = motion(
  forwardRef<HTMLDivElement, ContentPanelProps>(
    ({ className, light, children }, ref) => (
      <div ref={ref} className={twMerge("w-full", className)}>
        {React.cloneElement(children as React.ReactElement, {
          light,
        })}
      </div>
    )
  )
);

export default ContentPanel;
