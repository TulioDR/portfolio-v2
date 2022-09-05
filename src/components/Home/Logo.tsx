type Props = {};
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";
import { motion } from "framer-motion";
import useLanguageContext from "../../context/LanguageContext";

import moon from "../../assets/images/logo/moon.svg";
import shield from "../../assets/images/logo/shield.svg";
import Image from "next/image";

export default function Logo({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { portfolio } = currentIdiom.home;

   const moonVariant = {
      initial: { opacity: 0, x: "70%" },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.4,
         },
      },
      exit: {
         opacity: 0,
         x: "70%",
         transition: {
            duration: 0.5,
            delay: 0.15,
         },
      },
   };

   const title = {
      initial: { opacity: 0, x: "80%" },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.7,
            delay: 0.7,
            ease: "easeOut",
         },
      },
      exit: {
         opacity: 0,
         x: "80%",
         transition: {
            duration: 0.6,
         },
      },
   };

   return (
      <MouseParallaxContainer
         useWindowMouseEvents={true}
         className="w-44 h-full sm:w-72 md:w-80 lg:w-96 xl:w-125 relative -translate-y-4 sm:translate-y-0"
         containerStyles={{ overflow: "visible" }}
      >
         <MouseParallaxChild
            factorX={0.04}
            factorY={0.04}
            className="w-full h-full flex items-center justify-center"
         >
            <motion.div
               variants={moonVariant}
               initial="initial"
               animate="animate"
               exit="exit"
               className="h-full w-full"
            >
               <div className="w-full h-full relative -rotate-45 translate-x-5 sm:translate-x-0">
                  <Image
                     layout="fill"
                     src={moon}
                     alt="moon"
                     className="h-full w-full "
                  />
               </div>
            </motion.div>
         </MouseParallaxChild>
         <MouseParallaxChild
            factorX={0.02}
            factorY={0.02}
            className="absolute flex justify-end items-center top-0 left-0 h-full w-full"
         >
            <motion.div
               variants={title}
               initial="initial"
               animate="animate"
               exit="exit"
            >
               <div className="flex items-center justify-end space-x-2 sm:-translate-x-10 translate-y-5">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl drop-shadow-md shadow-black uppercase tracking-wide font-bold text-secondary z-10">
                     {portfolio}
                  </div>
                  <div className="relative w-14 h-28 sm:w-20  lg:w-24 lg:h-40 xl:w-36 xl:h-44">
                     <Image
                        layout="fill"
                        src={shield}
                        alt="shield"
                        className="z-10 drop-shadow-lg shadow-black"
                     />
                  </div>
               </div>
            </motion.div>
         </MouseParallaxChild>
      </MouseParallaxContainer>
   );
}
