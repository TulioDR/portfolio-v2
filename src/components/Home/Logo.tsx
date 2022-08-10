type Props = {};
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";
import { motion } from "framer-motion";

export default function Logo({}: Props) {
   const moon = {
      initial: { opacity: 0, x: "70%" },
      animate: {
         opacity: 1,
         x: 0,
         transition: {
            duration: 0.5,
            ease: "easeOut",
            delay: 0.7,
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
            delay: 0.4,
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
         className="flex justify-center items-center h-full relative"
         containerStyles={{ overflow: "visible" }}
      >
         <MouseParallaxChild
            factorX={0.04}
            factorY={0.04}
            updateStyles={{
               width: 500,
               height: 500,
            }}
         >
            <motion.div
               variants={moon}
               initial="initial"
               animate="animate"
               exit="exit"
               className="h-full"
            >
               <img
                  src="/logo/moon.svg"
                  alt="moon"
                  className="h-full -rotate-45"
               />
            </motion.div>
         </MouseParallaxChild>
         <MouseParallaxChild
            factorX={0.02}
            factorY={0.02}
            className="absolute pr-12 h-full w-full"
         >
            <motion.div
               variants={title}
               initial="initial"
               animate="animate"
               exit="exit"
               className="flex items-center justify-end h-full w-full"
            >
               <div className="text-6xl drop-shadow-md shadow-black uppercase tracking-wide font-bold text-secondary z-10 -translate-x-20 translate-y-6 ">
                  Portfolio
               </div>

               <img
                  src="/logo/shield.svg"
                  alt="shield"
                  className="z-10 -translate-x-16 translate-y-6 drop-shadow-lg shadow-black"
                  style={{ width: 150 }}
               />
            </motion.div>
         </MouseParallaxChild>
      </MouseParallaxContainer>
   );
}
