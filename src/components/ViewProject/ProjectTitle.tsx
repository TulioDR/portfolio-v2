import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ProjectTitle({ children }: Props) {
   return (
      <div className="overflow-hidden w-max h-max pb-3">
         <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6 }}
            className="text-8xl w-max"
         >
            {children}
         </motion.div>
      </div>
   );
}
