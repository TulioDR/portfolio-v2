type Props = {
   children: ReactNode;
};
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function MenuContainer({ children }: Props) {
   return (
      <motion.aside
         initial={{ height: "0", bottom: 0 }}
         animate={{ height: "100vh" }}
         exit={{ height: "0", top: 0 }}
         transition={{ duration: 0.5 }}
         className="fixed left-0 z-20 text-white w-full bg-gradient-to-r from-orange-800 to-orange-900 overflow-hidden"
      >
         <motion.div
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-screen flex flex-col items-center justify-center"
         >
            <motion.h5
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 0.4, delay: 0.3 }}
               className="text-center text-sm text-gray-400 uppercase mb-5 tracking-widest"
            >
               Menu
            </motion.h5>
            <ul className="text-5xl font-black">{children}</ul>
            <motion.div
               initial={{ y: "100%", opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{
                  duration: 0.4,
                  delay: 0.6,
               }}
               className="absolute bottom-8 flex items-center text-gray-400 text-sm"
            >
               <span className="material-icons mx-1">copyright</span>
               <span>2022 Tulio Ruzo. Made with</span>
               <span className="material-icons mx-1">favorite</span>
               <span>in Carabobo, Venezuela.</span>
            </motion.div>
         </motion.div>
      </motion.aside>
   );
}
