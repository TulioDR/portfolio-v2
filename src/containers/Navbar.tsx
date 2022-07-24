import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MenuOption from "../components/Menu/MenuOption";
import MenuContainer from "../components/Menu/MenuContainer";
import usePositionContext from "../context/PositionContext";

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
   const [isEnglish, setIsEnglish] = useState(false);

   const closeMenu = () => {
      setIsOpen(false);
   };

   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();
   return (
      <>
         <nav className="section flex justify-between items-center px-10 pt-8 fixed w-full text-white z-30 text-2xl">
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
         </nav>
         <AnimatePresence>
            {isOpen && (
               <MenuContainer>
                  <ul className="text-center text-5xl space-y-5 font-black menu-swiper-pagination">
                     <MenuOption
                        closeMenu={closeMenu}
                        bulletRef={homeBullet}
                        delay={0.35}
                        index={0}
                     >
                        Home
                     </MenuOption>
                     <MenuOption
                        closeMenu={closeMenu}
                        bulletRef={aboutBullet}
                        delay={0.4}
                        index={1}
                     >
                        About
                     </MenuOption>
                     <MenuOption
                        closeMenu={closeMenu}
                        bulletRef={projectsBullet}
                        delay={0.45}
                        index={2}
                     >
                        Projects
                     </MenuOption>
                     <MenuOption
                        closeMenu={closeMenu}
                        bulletRef={contactBullet}
                        delay={0.5}
                        index={3}
                     >
                        Contact
                     </MenuOption>
                  </ul>
               </MenuContainer>
            )}
         </AnimatePresence>
      </>
   );
}
