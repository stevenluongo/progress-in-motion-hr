export const translateY = ({
  delay,
  amount = 40,
  reverse,
}: {
  delay: number;
  amount?: number;
  reverse?: boolean;
}) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        mass: 0.75,
        stiffness: 80,
        delay,
      },
    },
    initial: { opacity: 0, y: reverse ? -amount : amount },
  };
};

export const opacity = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.4 },
  },
  initial: { opacity: 0 },
};

export const translateX = ({
  delay,
  amount = 40,
  reverse,
}: {
  delay: number;
  amount?: number;
  reverse?: boolean;
}) => {
  return {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 25,
        mass: 0.75,
        stiffness: 80,
        delay,
      },
    },
    initial: { opacity: 0, x: reverse ? -amount : amount },
  };
};
