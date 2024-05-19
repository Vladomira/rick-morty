export const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
    transitionEnd: {
      display: "none",
    },
  },
};
export const btnsAnimation = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 30 },

  transition: {
    ease: "linear",
    opacity: { duration: 1 },
    x: { duration: 1 },
  },
};
export const btnScrollAnimation = {
  show: { opacity: 1, x: 0 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 60 },

  transition: {
    ease: "linear",
    opacity: { duration: 0.6 },
    x: { duration: 1.3 },
  },

  whileHover: {
    scale: 1.1,
    transition: { duration: 1, scale: { duration: 1, ease: "linear" } },
  },
};
