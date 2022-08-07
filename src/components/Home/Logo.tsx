type Props = {};

import { motion } from "framer-motion";

export default function Logo({}: Props) {
   return (
      <motion.div
         className="flex justify-center items-center h-full"
         style={{ left: 800 }}
         initial={{ opacity: 0, x: "100%" }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: "100%" }}
         transition={{ duration: 1, delay: 0.4 }}
      >
         <div className="relative" style={{ width: 500, height: 500 }}>
            <img
               src="/logo/moon.svg"
               alt="moon"
               className="h-full w-full -rotate-45"
            />
            <div className="absolute flex items-center right-0 top-1/2 -translate-y-1/2">
               <div className="text-6xl drop-shadow-lg shadow-black uppercase tracking-widest font-black text-secondary z-10 -translate-x-20 translate-y-6 ">
                  Portfolio
               </div>
               <img
                  src="/logo/shield.svg"
                  alt="shield"
                  className="z-10 -translate-x-16 translate-y-6 drop-shadow-lg shadow-black"
                  style={{ width: 150 }}
               />
            </div>
         </div>
      </motion.div>
   );
}
