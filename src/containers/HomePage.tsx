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
import CardInfo from "../components/CardInfo";

type Props = {};

export default function HomePage({}: Props) {
   return (
      <SectionContainer index={0}>
         <DescriptionContainer>
            <SectionTitle>
               <div className="mb-2 text-8xl">TULIO</div>
               <div className="text-8xl">RUZO</div>
            </SectionTitle>
            <Underline />
            <CardInfo delay={0.8}>
               <div>Web Developer</div>
            </CardInfo>
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
               {/* <motion.img
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
               /> */}
               <div className="text-5xl top-1/2 -translate-y-1/2 -translate-x-10 uppercase absolute tracking-widest font-black">
                  Portfolio
               </div>
               {/* <motion.div className="absolute bottom-0 w-full translate-y-40">
                  <img
                     src="/logo/ribbon.svg"
                     alt="ribbon"
                     className="w-full scale-125"
                  />
                  <h1 className="text-4xl uppercase text-white text-center w-full tracking-widest -translate-y-16">
                     Portfolio
                  </h1>
               </motion.div> */}
            </motion.div>
         </div>
      </SectionContainer>
   );
}
