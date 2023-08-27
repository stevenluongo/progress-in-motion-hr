import React, { Fragment, FC, ReactElement, ReactNode } from "react";

interface FeaturesContainerProps {
  children: ReactNode[];
  light?: boolean;
}

const FeaturesContainer: FC<FeaturesContainerProps> = ({ children, light }) => {
  return (
    <div className="grid grid-rows-3 sm:grid-flow-col sm:grid-cols-[repeat(auto-fill_auto)] gap-2 w-full place-items-center sm:place-items-start">
      {children.map((child, index) => (
        <Fragment key={index}>
          {React.cloneElement(child as ReactElement, {
            light,
          })}
        </Fragment>
      ))}
    </div>
  );
};

export default FeaturesContainer;
