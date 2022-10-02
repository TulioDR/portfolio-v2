import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

const projectTitle = {
   initial: { y: "110%" },
   animate: { y: 0, transition: { duration: 0.5 } },
   exit: { y: "110%", transition: { duration: 0.5 } },
};

export default function VisitSiteBtn({ children }: Props) {
   return (
      <div className="overflow-hidden w-max hover:-translate-y-1 duration-300">
         <motion.button
            variants={projectTitle}
            className="rounded-full bg-secondary w-max text-xl px-10 h-12"
         >
            {children}
         </motion.button>
      </div>
   );
}
