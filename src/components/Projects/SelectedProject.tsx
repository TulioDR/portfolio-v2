import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import useRouteContext from "../../context/RouteContext";

type Props = {
   back?: boolean;
   reveal: boolean;
};

export default function SelectedProject({ back, reveal }: Props) {
   const { positionValues, backgroundImage } = useRouteContext();

   const forward = {
      initial: {
         width: positionValues?.width,
         height: positionValues?.height,
         x: positionValues?.x,
         y: positionValues?.y,
      },
      animate: {
         width: "100vw",
         height: "100vh",
         x: 0,
         y: 0,
         transition: {
            duration: 0.4,
            ease: [0.645, 0.045, 0.355, 1],
         },
      },
   };
   const backward = {
      initial: {
         width: "100vw",
         height: "100vh",
         x: 0,
         y: 0,
      },
      exit: {
         width: positionValues?.width,
         height: positionValues?.height,
         x: positionValues?.x,
         y: positionValues?.y,
         transition: {
            duration: 0.5,
            delay: 0.5,
            ease: "easeOut",
         },
      },
   };
   return (
      <AnimatePresence>
         {reveal && (
            <motion.div
               variants={!back ? forward : backward}
               initial="initial"
               animate="animate"
               exit="exit"
               className="absolute top-0 left-0 z-10"
            >
               <div className="relative w-full h-full">
                  <Image
                     src={backgroundImage}
                     alt="landscape"
                     layout="fill"
                     objectFit="cover"
                     objectPosition="top"
                     className="brightness-50"
                     priority
                  />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
