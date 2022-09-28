import { motion } from "framer-motion";

type Props = {};

const projectTitle = {
   initial: { y: "110%" },
   animate: { y: 0, transition: { duration: 0.5 } },
   exit: { y: "110%", transition: { duration: 0.5 } },
};

export default function ProjectDescription({}: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            variants={projectTitle}
            className="text-3xl font-semibold w-1/2"
         >
            Find and keep track of the movies and tv shows you love
         </motion.div>
      </div>
   );
}
