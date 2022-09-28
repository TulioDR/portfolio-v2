import { motion } from "framer-motion";

type Props = {};

const projectsUnderline = {
   initial: { width: 0 },
   animate: {
      width: "66.66%",
      transition: {
         duration: 0.5,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
   exit: {
      width: 0,
      transition: {
         duration: 0.5,
         ease: [0.645, 0.045, 0.355, 1],
      },
   },
};

export default function ViewProjectUnderline({}: Props) {
   return (
      <div className="w-28 md:w-36 space-y-3 md:space-y-5">
         <motion.div
            variants={projectsUnderline}
            className="bg-secondary h-1 rounded-full"
         ></motion.div>
         <motion.div
            variants={projectsUnderline}
            className="bg-secondary h-1 rounded-full ml-[33.33%]"
         ></motion.div>
      </div>
   );
}
