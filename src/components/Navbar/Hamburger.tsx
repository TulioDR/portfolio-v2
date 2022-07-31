import { motion } from "framer-motion";
import { useState } from "react";
import useNavbarContext from "../../context/NavbarContext";

export default function Hamburger() {
   const { toggleMenu, isMenuOpen } = useNavbarContext();

   const [isAnimating, setIsAnimating] = useState(false);

   const handleClick = () => {
      toggleMenu();
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, 500);
   };

   return (
      <button
         className="flex flex-col space-y-4 py-2"
         onClick={isAnimating ? undefined : handleClick}
      >
         <motion.span
            animate={{
               y: isMenuOpen ? 10 : 0,
               rotate: isMenuOpen ? -45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white w-12 h-1"
         ></motion.span>
         <motion.span
            animate={{
               y: isMenuOpen ? -10 : 0,
               rotate: isMenuOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="bg-white w-12 h-1"
         ></motion.span>
      </button>
   );
}
