import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isEnglish, setIsEnglish] = useState(false);
   return (
      <>
         <div className="section flex justify-between items-center px-10 py-6 fixed w-full text-white z-20 text-2xl">
            <div className="">Tulio Ruzo</div>
            <div className="flex space-x-7 items-center font-medium">
               <button
                  className="flex items-center space-x-2"
                  onClick={() => setIsEnglish(!isEnglish)}
               >
                  <span className="material-icons">translate</span>
                  <span className="">
                     <span
                        className={`duration-300 ${
                           isEnglish ? "brightness-105" : "text-gray-300"
                        }`}
                     >
                        en
                     </span>
                     <span>/</span>
                     <span
                        className={`duration-300 ${
                           !isEnglish ? "brightness-105" : "text-gray-300"
                        }`}
                     >
                        es
                     </span>
                  </span>
               </button>
               <button className="flex" onClick={() => setIsOpen(!isOpen)}>
                  <div className="flex flex-col space-y-4">
                     <motion.span
                        animate={{
                           y: isOpen ? 10 : 0,
                           rotate: isOpen ? -45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-white w-12 h-1"
                     ></motion.span>
                     <motion.span
                        animate={{
                           y: isOpen ? -10 : 0,
                           rotate: isOpen ? 45 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-white w-12 h-1"
                     ></motion.span>
                  </div>
               </button>
            </div>
         </div>
         <AnimatePresence>
            {isOpen && (
               <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="fixed right-0 z-10 text-white w-full sm:w-80 h-screen bg-gradient-to-r from-orange-700 to-secondary flex items-center justify-center"
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
