import { ReactNode, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type Props = {
   children: ReactNode;
   showCarousel: boolean;
   selectedPagination: number;
   constrainRef: React.RefObject<Element>;
};

export default function ProjectsContainer({
   children,
   showCarousel,
   selectedPagination,
   constrainRef,
}: Props) {
   const [dragConstraints, setDragConstraints] =
      useState<React.RefObject<Element>>();
   const onDragStart = () => {
      setDragConstraints(constrainRef);
   };

   const controls = useAnimation();
   useEffect(() => {
      if (showCarousel) {
         const { clientWidth } = constrainRef.current!;
         const containerWidth: number = clientWidth - 80 - 40;
         const distance = selectedPagination - 1;
         controls.start({
            x: -(containerWidth * distance),
            transition: { duration: 0.5 },
         });
      } else {
         controls.start({
            x: 0,
            transition: { duration: 0.5 },
         });
      }
   }, [selectedPagination, showCarousel, constrainRef, controls]);

   return (
      <motion.div
         drag={showCarousel ? false : "x"}
         dragConstraints={dragConstraints}
         dragElastic={0.1}
         animate={controls}
         onDragStart={onDragStart}
         className={`h-full ${
            showCarousel
               ? "w-full flex items-center space-x-10 px-20"
               : "w-min grid grid-flow-col grid-rows-2 cursor-grab active:cursor-grabbing"
         }`}
      >
         {children}
      </motion.div>
   );
}
