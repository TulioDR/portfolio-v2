// import {
//    MouseParallaxChild,
//    MouseParallaxContainer,
// } from "react-parallax-mouse";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
// import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   currentIndex: number;
};

export default function HomePage({ currentIndex }: Props) {
   return (
      <SectionContainer currentIndex={currentIndex} index={0}>
         <DescriptionContainer>
            <SectionTitle>
               <div className="mb-2">TULIO</div>
               <div>RUZO</div>
            </SectionTitle>
            <Underline />
            <div className="text-3xl">Web Developer</div>
         </DescriptionContainer>
         <div className="w-3/5 h-full flex items-center justify-center">
            <motion.div
               initial={{ x: "100%", opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ duration: 0.7 }}
               className="relative mx-auto"
               style={{ width: 350 }}
            >
               <motion.img
                  src="/logo/shield.svg"
                  alt="shield"
                  className="mx-auto"
                  style={{ height: 300 }}
               />
               <motion.img
                  initial={{ x: 50, y: -200, rotate: -30 }}
                  animate={{ x: 100, y: -150, rotate: -30 }}
                  transition={{
                     duration: 0.15,
                     delay: 1,
                  }}
                  src="/logo/sword.svg"
                  alt="sword2"
                  className="absolute top-0 left-0 -z-10"
                  style={{ height: 500 }}
               />
               <motion.img
                  initial={{ x: -48, y: -200, rotate: 29 }}
                  animate={{ x: -98, y: -150, rotate: 29 }}
                  transition={{
                     duration: 0.15,
                     delay: 1,
                  }}
                  src="/logo/sword.svg"
                  alt="sword1"
                  className="absolute top-0 right-0 -z-10"
                  style={{ height: 500 }}
               />
               <motion.div className="absolute bottom-0 w-full translate-y-40">
                  <img
                     src="/logo/ribbon.svg"
                     alt="ribbon"
                     className="w-full scale-125"
                  />
                  <h1 className="text-4xl uppercase text-white text-center w-full tracking-widest -translate-y-16">
                     Portfolio
                  </h1>
               </motion.div>
            </motion.div>
         </div>
      </SectionContainer>
   );
}
{
   /* <img
               data-depth="0.85"
               // initial={{ x: "100%", y: "-100%", rotate: 45, opacity: 0 }}
               // animate={{ x: 0, y: 0, rotate: 45, opacity: 1 }}
               // transition={{
               //    duration: 0.5,
               //    delay: 0.4,
               //    ease: "easeOut",
               // }}
               src="/logo/swordPNGsmall.png"
               alt="sword"
               className="absolute w-1/2 rotate-45 layer"
            />
            <img
               data-depth="0.6"
               // initial={{ x: "-100%", y: "-100%", rotate: -45, opacity: 0 }}
               // animate={{ x: 0, y: 0, rotate: -45, opacity: 1 }}
               // transition={{
               //    duration: 0.5,
               //    delay: 0.4,
               //    ease: "easeOut",
               // }}
               src="/logo/swordPNGsmall.png"
               alt="sword2"
               className="absolute w-1/2 -scale-x-100 -rotate-45 layer"
            />
            <div
               data-depth="0.2"
               // initial={{ y: "100%", opacity: 0 }}
               // animate={{ y: 0, opacity: 1 }}
               // transition={{
               //    duration: 0.5,
               //    delay: 0.4,
               // }}
               className="relative flex items-center justify-center layer"
            >
               <img src="/logo/shield.png" alt="shield" className="w-3/5" />
               <div className="absolute text-6xl -translate-y-4">Portfolio</div>
            </div> */
}
