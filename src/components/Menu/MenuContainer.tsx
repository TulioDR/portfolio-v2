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
         className="fixed left-0 z-20 text-white w-full overflow-hidden"
      >
         <div className="w-full h-screen bg-gradient-to-br from-orange-900 to-secondary">
            <motion.div
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
               className="relative h-full w-full flex flex-col items-center justify-center"
            >
               {children}
            </motion.div>
         </div>
      </motion.aside>
   );
}
