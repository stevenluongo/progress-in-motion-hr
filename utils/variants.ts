export const translateY = (delay: number) => {
  return {
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, damping: 10, delay },
    },
    initial: { opacity: 0, y: 40 },
  };
};

export const opacity = {
  visible: {
    opacity: 1,
    transition: { duration: 1.5, delay: 0.4 },
  },
  initial: { opacity: 0 },
};
