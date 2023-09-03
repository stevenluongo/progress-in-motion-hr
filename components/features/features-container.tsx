import React, { Fragment, FC, ReactElement } from "react";
import { FeaturesContainerProps } from "./features";

const FeaturesContainer: FC<FeaturesContainerProps> = ({ children, light }) => {
  return (
    <div className="grid grid-rows-3 sm:grid-flow-col sm:grid-cols-[repeat(auto-fill_auto)] gap-2 w-full place-items-center sm:place-items-start">
      {children.map((child, index) => (
        <Fragment key={index}>
          {React.cloneElement(child as ReactElement, {
            light: light ? true : false,
          })}
        </Fragment>
      ))}
    </div>
  );
};

export default FeaturesContainer;
