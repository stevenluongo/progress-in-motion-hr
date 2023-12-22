import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useAnimationInView = (delay?: number, hide?: boolean) => {
  const { ref, inView: isHeaderInView } = useInView({
    /* Optional options */
    threshold: 0,
    delay: delay || 0,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      setTimeout(() => {
        controls.start("visible");
      });
    } else {
      if (hide) {
        controls.start("initial");
      }
    }
  }, [isHeaderInView, controls]);

  return { ref, controls };
};
