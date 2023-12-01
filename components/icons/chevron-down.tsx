import { FC } from "react";
import { IconProps } from "./icon-props";
import { scroller } from "react-scroll";

const ChevronDown: FC<IconProps> = ({ className, onClick, scrollTo }) => {
  const scrollToNext = () => {
    scroller.scrollTo(scrollTo as string, {
      duration: 1500,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: 0,
    });
  };
  return (
    <svg
      onClick={onClick ? onClick : scrollTo ? scrollToNext : undefined}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

export default ChevronDown;
