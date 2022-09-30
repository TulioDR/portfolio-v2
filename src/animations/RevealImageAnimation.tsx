import { motion } from "framer-motion";

type Props = {};

const revealImageAnimation1 = {
   initial: { x: 0 },
   animate: {
      x: "calc(100% + 10px)",
      transition: {
         duration: 0.6,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};
const revealImageAnimation2 = {
   initial: { width: 0 },
   animate: {
      width: "30%",
      transition: {
         duration: 0.6,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

export default function RevealImageAnimation({}: Props) {
   return (
      <motion.div
         variants={revealImageAnimation1}
         className="bg-primary z-10 absolute top-0 bottom-0 left-0 w-full h-full"
      >
         <motion.div
            variants={revealImageAnimation2}
            className="bg-secondary w-full h-full"
         ></motion.div>
      </motion.div>
   );
}
