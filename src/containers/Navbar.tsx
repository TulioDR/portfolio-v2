import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <>
         <div className="section flex justify-between px-10 py-6 fixed w-full text-white z-20">
            <div className="text-2xl">Tulio Ruzo</div>
            <div className="flex space-x-7 items-center font-medium">
               <button className="flex">
                  <span className="material-icons mr-1">translate</span>
                  <span>EN/ES</span>
               </button>
               <button className="grid" onClick={() => setIsOpen(!isOpen)}>
                  <span className="material-icons text-4xl">menu</span>
               </button>
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.4 }}
                  className="fixed right-0 z-10 text-white w-full sm:w-72 h-screen bg-gradient-to-r from-orange-700 to-secondary flex items-center justify-center"
               >
                  <ul className="text-center text-3xl space-y-5 uppercase">
                     <li>Home</li>
                     <li>About</li>
                     <li>Projects</li>
                     <li>Contact</li>
                  </ul>
               </motion.aside>
            )}
         </AnimatePresence>
      </>
   );
}
