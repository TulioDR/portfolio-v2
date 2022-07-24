import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode;
};

export default function CardContainer({ children }: Props) {
   return (
      <motion.div
         initial={{ scale: 0.95 }}
         animate={{ scale: 1 }}
         transition={{
            duration: 1,
            delay: 0.4,
            ease: "easeInOut",
         }}
         className="w-3/5 shadow-lg h-full bg-green origin-right relative overflow-hidden"
      >
         {children}
         <motion.div
            initial={{ x: 0 }}
            animate={{ x: "calc(100% + 10px)" }}
            transition={{
               duration: 0.7,
               delay: 0.5,
               ease: [0.645, 0.045, 0.355, 1],
            }}
            className="bg-primary absolute top-0 bottom-0 left-0 w-full h-full"
         >
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "30%" }}
               transition={{
                  duration: 0.7,
                  delay: 0.4,
                  ease: [0.645, 0.045, 0.355, 1],
               }}
               className="bg-secondary w-full h-full"
            ></motion.div>
         </motion.div>
      </motion.div>
   );
}
