import React, { FC, Fragment, forwardRef } from "react";
import { ContentContainerProps } from "./content";

/*
This component is used to wrap content in a container that has a max width of 80rem and a gap of 200px between each child.
It passes down a className prop to each child that alternates between order-1 and order-2.
This is used to reverse the order of the children on mobile and desktop.
It also passes down a light prop to each child.
This is used to dynamically change the styles of the children.
*/

// const ContentContainer: FC<ContentContainerProps> = ({
//   children,
//   reverse,
//   light = false,
// }) => {
//   return (
//     <div className="flex gap-16 items-center flex-col md:flex-row">
//       {children.map((child, index) => (
//         <Fragment key={index}>
//           {React.cloneElement(child as React.ReactElement, {
//             // alternating between order-1 and order-2
//             className:
//               index % 2 === 0
//                 ? reverse
//                   ? "order-1 md:order-2"
//                   : "order-1"
//                 : reverse
//                 ? "order-2 md:order-1"
//                 : "order-2",
//             // passing down the light prop to each child
//             light,
//           })}
//         </Fragment>
//       ))}
//     </div>
//   );
// };

const ContentContainer = forwardRef<HTMLDivElement, ContentContainerProps>(
  function fn({ children, reverse, light = false }, ref) {
    return (
      <div className="flex gap-16 items-center flex-col md:flex-row" ref={ref}>
        {children.map((child, index) => (
          <Fragment key={index}>
            {React.cloneElement(child as React.ReactElement, {
              // alternating between order-1 and order-2
              className:
                index % 2 === 0
                  ? reverse
                    ? "order-1 md:order-2"
                    : "order-1"
                  : reverse
                  ? "order-2 md:order-1"
                  : "order-2",
              // passing down the light prop to each child
              light,
            })}
          </Fragment>
        ))}
      </div>
    );
  }
);

export default ContentContainer;
