import { AnimationControls, useInView } from "framer-motion";
import { MutableRefObject, useEffect } from "react";

export const useAnimationInView = (
  ref: MutableRefObject<null>,
  animationControls: AnimationControls
) => {
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        animationControls.start("visible");
      });
    }
  }, [isInView, animationControls]);
};
