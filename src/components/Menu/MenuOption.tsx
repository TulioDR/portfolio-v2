import { ReactNode } from "react";
import { motion } from "framer-motion";
import usePositionContext from "../../context/PositionContext";
import useNavbarContext from "../../context/NavbarContext";

type Props = {
   children: ReactNode;
   index: number;
   bulletRef: any;
};

export default function MenuOption({ children, bulletRef, index }: Props) {
   const { currentIndex } = usePositionContext();
   const { hoveredBullet, setHoveredBullet, closeMenu } = useNavbarContext();

   const execute = () => {
      bulletRef.current.click();
      closeMenu();
   };
   const handleHoverStart = () => {
      setHoveredBullet(index);
   };
   const handleHoverEnd = () => {
      if (currentIndex != null) setHoveredBullet(currentIndex);
   };

   const option = {
      hidden: { x: -60, opacity: 0 },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            duration: 0.4,
         },
      },
   };

   return (
      <motion.li
         variants={option}
         className={`cursor-pointer relative w-min mx-auto py-2 ${
            currentIndex === index ? "" : "text-gray-400"
         }`}
         onClick={execute}
         onHoverStart={handleHoverStart}
         onHoverEnd={handleHoverEnd}
      >
         {children}
         {hoveredBullet === index && (
            <motion.div
               layoutId="menuSelector"
               transition={{ duration: 0.2 }}
               className="bg-white w-24 h-2 hidden md:block absolute top-1/2 -left-28"
            ></motion.div>
         )}
      </motion.li>
   );
}
