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
  const { ref, inView } = useInView({
    threshold,
    delay,
    rootMargin: margin,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        controls.start("visible");
      });
    }
  }, [inView, controls]);

  return { ref, controls, inView };
};
