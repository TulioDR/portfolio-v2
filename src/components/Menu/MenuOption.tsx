import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode;
   delay: number;
};

export default function MenuOption({ children, delay }: Props) {
   return (
      <motion.li
         initial={{ x: -60, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, delay: delay }}
      >
         {children}
      </motion.li>
   );
}
