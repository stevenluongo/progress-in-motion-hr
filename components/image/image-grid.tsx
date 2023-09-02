import React, { FC, Fragment, ReactNode } from "react";

const ImageGrid: FC<{ children: ReactNode[]; light?: boolean }> = ({
  children,
  light,
}) => {
  return (
    <div className="flex gap-x-8">
      {children.map((child, index) => (
        <Fragment key={index}>
          {React.cloneElement(child as React.ReactElement, {
            light,
          })}
        </Fragment>
      ))}
    </div>
  );
};

export default ImageGrid;
