import React, { FC, Fragment, ReactNode } from "react";

/*
This component is used to wrap content in a container that has a max width of 80rem and a gap of 200px between each child.
It passes down a className prop to each child that alternates between order-1 and order-2.
This is used to reverse the order of the children on mobile and desktop.
*/

interface ContentContainerProps {
  children: ReactNode[];
  reverse?: boolean;
}

const ContentContainer: FC<ContentContainerProps> = ({ children, reverse }) => {
  return (
    <div className="flex gap-16 items-center flex-col md:flex-row">
      {children.map((child, index) => (
        <Fragment key={index}>
          {React.cloneElement(child as React.ReactElement, {
            className:
              index % 2 === 0
                ? reverse
                  ? "order-1 md:order-2"
                  : "order-1"
                : reverse
                ? "order-2 md:order-1"
                : "order-2",
          })}
        </Fragment>
      ))}
    </div>
  );
};

export default ContentContainer;
