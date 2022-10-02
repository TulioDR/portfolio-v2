import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import usePositionContext from "../../context/PositionContext";
import { motion } from "framer-motion";
type Props = {
   index: number;
   children: React.ReactNode;
};

const containerAnimation = {
   initial: { opacity: 1 },
   animate: {
      transition: {
         delayChildren: 0.5,
      },
   },
};

export default function SectionContainer({ index, children }: Props) {
   const { currentIndex } = usePositionContext();
   const [selected, setSelected] = useState(true);

   useEffect(() => {
      if (currentIndex === index) {
         setSelected(false);
         setTimeout(() => setSelected(true), 50);
      }
   }, [currentIndex, index]);

   return (
      <div className="w-full h-full pl-10 md:pl-16 lg:pl-20 xl:pl-40 2xl:pl-48 relative overflow-hidden">
         <div className="w-full h-full pt-24 pb-36 sm:py-24 lg:pb-20 2xl:pb-32 2xl:py-32 pr-10 md:pr-16 lg:pr-20 xl:pr-16 2xl:pr-32 overflow-hidden">
            <AnimatePresence>
               {selected && (
                  <motion.div
                     variants={containerAnimation}
                     initial="initial"
                     animate="animate"
                     className="w-full h-full flex"
                  >
                     {children}
                  </motion.div>
               )}
            </AnimatePresence>
         </div>
      </div>
   );
}
