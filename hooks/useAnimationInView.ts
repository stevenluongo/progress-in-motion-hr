import { AnimationControls, useInView } from "framer-motion";
import { MutableRefObject, useEffect } from "react";
import { useDeviceWidth } from "./useDeviceWidth";
import { useMediaQuery } from "react-responsive";

export const useAnimationInView = (
  ref: MutableRefObject<null>,
  animationControls: AnimationControls
) => {
  const isMobile = useMediaQuery({ query: "(max-width: 500px)" });

  const margin = `${isMobile ? "0px" : "-400px"} 0px`;

  const isInView = useInView(ref, {
    margin,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        animationControls.start("visible");
      });
    }
  }, [isInView, animationControls]);
};
