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
         transition={{ duration: 0.8, ease: "easeInOut" }}
         className="h-screen w-full"
      >
         <div className="h-full w-full pl-40 2xl:pl-48 py-24 2xl:py-32 pr-24 2xl:pr-32 text-white">
            <AnimatePresence>
               <div className="h-full w-full flex">
                  <>{selected && children}</>
               </div>
            </AnimatePresence>
         </div>
      </motion.section>
   );
}
