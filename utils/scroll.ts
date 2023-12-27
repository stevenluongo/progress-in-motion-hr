import { scroller } from "react-scroll";

export const executeScroll = ({
  to,
  offset = -200,
}: {
  to: string;
  offset?: number;
}) => {
  scroller.scrollTo(to, {
    duration: 1500,
    delay: 0,
    smooth: "easeInOutQuart",
    offset,
  });
};
