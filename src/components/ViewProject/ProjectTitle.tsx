import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

const projectTitle = {
   initial: { y: "110%" },
   animate: { y: 0, transition: { duration: 0.5 } },
   exit: { y: "110%", transition: { duration: 0.5 } },
};

export default function ProjectTitle({ children }: Props) {
   return (
      <div className="overflow-hidden w-max h-max pb-2">
         <motion.div variants={projectTitle} className="text-8xl w-max">
            {children}
         </motion.div>
      </div>
   );
}
