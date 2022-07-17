import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode;
};

export default function CardContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ scale: 0.9 }}
         animate={{ scale: 1 }}
         transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeInOut",
         }}
         className="w-3/5 shadow-md h-full origin-right relative overflow-hidden"
      >
         {children}
      </motion.div>
   );
}
