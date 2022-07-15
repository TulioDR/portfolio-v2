import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import usePositionContext from "../context/PositionContext";
type Props = {
   children: any;
   index: number;
};

export default function SectionContainer({ children, index }: Props) {
   const { currentIndex } = usePositionContext();
   const [selected, setSelected] = useState(true);

   useEffect(() => {
      if (currentIndex === index) {
         setSelected(false);
         setTimeout(() => setSelected(true), 50);
      }
   }, [currentIndex]);

   return (
      <motion.section
         initial={{ y: `-${100 * currentIndex}%` }}
         animate={{ y: `-${100 * currentIndex}%` }}
         transition={{ duration: 1.2, ease: "easeInOut" }}
         className="h-screen w-full"
      >
         <div className="h-full w-full pl-40 pt-20 pr-20 text-white">
            <AnimatePresence>
               <>{selected && children}</>
            </AnimatePresence>
         </div>
      </motion.section>
   );
}
