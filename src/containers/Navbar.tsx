import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuOption from "../components/Menu/MenuOption";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isEnglish, setIsEnglish] = useState(false);
   return (
      <>
         <div className="section flex justify-between items-center px-10 pt-8 fixed w-full text-white z-30 text-2xl">
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
                           isEnglish ? "brightness-105" : "text-gray-400"
                        }`}
                     >
                        en
                     </span>
                     <span>/</span>
                     <span
                        className={`duration-300 ${
                           !isEnglish ? "brightness-105" : "text-gray-400"
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
                     <ul className="text-center text-5xl space-y-5 font-black">
                        <MenuOption delay={0.35}>Home</MenuOption>
                        <MenuOption delay={0.4}>About</MenuOption>
                        <MenuOption delay={0.45}>Projects</MenuOption>
                        <MenuOption delay={0.5}>Contact</MenuOption>
                     </ul>
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
            )}
         </AnimatePresence>
      </>
   );
}
