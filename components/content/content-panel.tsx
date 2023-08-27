import { FC, ReactNode } from "react";

/*
This component is a wrapper for each item in the content container.
It takes in a className prop that is used to reverse the order of the children on mobile and desktop.
This prop is passed down from the content container component.
*/

interface ContentPanelProps {
  children: ReactNode;
  className?: string;
}

const ContentPanel: FC<ContentPanelProps> = ({ children, className }) => {
  return <div className={`${className} w-full`}>{children}</div>;
};

export default ContentPanel;
