import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type AnimationInViewProps = {
  delay?: number;
  threshold?: number;
  margin?: string;
};

export const useAnimationInView = ({
  delay = 0,
  threshold = 0,
  margin = "0px 0px 0px 0px",
}: AnimationInViewProps) => {
  const { ref, inView: isHeaderInView } = useInView({
    threshold,
    delay,
    rootMargin: margin,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (isHeaderInView) {
      setTimeout(() => {
        controls.start("visible");
      });
    }
  }, [isHeaderInView, controls]);

  return { ref, controls };
};
