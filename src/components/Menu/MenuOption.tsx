import { ReactNode } from "react";
import { motion } from "framer-motion";
import usePositionContext from "../../context/PositionContext";

type Props = {
   children: ReactNode;
   closeMenu: any;
   delay: number;
   index: number;
   bulletRef: any;
};

export default function MenuOption({
   children,
   closeMenu,
   bulletRef,
   delay,
   index,
}: Props) {
   const { currentIndex } = usePositionContext();

   const execute = () => {
      bulletRef.current.click();
      closeMenu();
   };

   return (
      <motion.li
         initial={{ x: -60, opacity: 0 }}
         animate={{ x: 0, opacity: 1 }}
         transition={{ duration: 0.4, delay: delay }}
         className={`cursor-pointer ${
            currentIndex === index ? "" : "text-gray-400"
         }`}
         onClick={execute}
      >
         {children}
      </motion.li>
   );
}
