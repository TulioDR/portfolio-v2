import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type Props = {
   children: ReactNode;
   showCarousel: boolean;
   selectedPagination: number;
};

export default function ProjectsContainer({
   children,
   showCarousel,
   selectedPagination,
}: Props) {
   const distance = selectedPagination - 1;

   const [width, setWidth] = useState<number>(0);
   const containerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (containerRef.current) {
         const containerWidth: number =
            containerRef.current.clientWidth - 80 - 40;
         setWidth(containerWidth);
      }
   }, []);

   return (
      <motion.div
         ref={containerRef}
         animate={showCarousel ? { x: -(width * distance) } : { x: 0 }}
         transition={{ duration: 0.5 }}
         className={`w-full h-full ${
            showCarousel
               ? "flex items-center space-x-10 px-20"
               : "grid grid-flow-col grid-rows-2 gap-5 p-5"
         }`}
      >
         {children}
      </motion.div>
   );
}
