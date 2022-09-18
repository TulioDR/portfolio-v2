export const infoContainerAnimation = {
   initial: { opacity: 1 },
   animate: {
      transition: {
         delayChildren: 0.5,
         staggerChildren: 0.1,
      },
   },
};

export const infoAnimation = {
   initial: { x: "-100%" },
   animate: {
      x: 0,
      transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] },
   },
};
