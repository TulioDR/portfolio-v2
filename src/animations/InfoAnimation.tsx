export const infoContainerAnimation = {
   initial: { opacity: 1 },
   animate: {
      transition: {
         delayChildren: 0.2,
         staggerChildren: 0.6,
      },
   },
};

export const tagContainerAnimation = {
   initial: { x: "-100%", opacity: 0 },
   animate: {
      x: 0,
      opacity: 1,
      transition: {
         duration: 0.6,
         ease: [0.645, 0.045, 0.355, 1],
         delayChildren: 0.5,
         staggerChildren: 0.1,
      },
   },
};

export const infoAnimation = {
   initial: { x: "calc(-100% - 20px)" },
   animate: {
      x: 0,
      transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] },
   },
};
