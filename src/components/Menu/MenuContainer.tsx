import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function MenuContainer({ children }: Props) {
   return (
      <motion.aside
         initial={{ height: "0", bottom: 0 }}
         animate={{ height: "100vh" }}
         exit={{ height: "0", top: 0 }}
         transition={{ duration: 0.5 }}
         className="fixed left-0 z-20 text-white w-full bg-gradient-to-t from-orange-800 to-orange-900 overflow-hidden"
      >
         <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-screen flex flex-col items-center justify-center"
         >
            {children}
         </motion.div>
      </motion.aside>
   );
}
