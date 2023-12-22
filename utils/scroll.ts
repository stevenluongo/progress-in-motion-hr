import { scroller } from "react-scroll";

export const executeScroll = (to: string) => {
  scroller.scrollTo(to, {
    duration: 1500,
    delay: 0,
    smooth: "easeInOutQuart",
    offset: -100,
  });
};
