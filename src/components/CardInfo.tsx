import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode;
   delay: number;
};

export default function CardInfo({ children, delay }: Props) {
   return (
      <motion.div
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         transition={{
            duration: 0.5,
            delay: delay,
            ease: [0.645, 0.045, 0.355, 1],
         }}
      >
         {children}
      </motion.div>
   );
}
