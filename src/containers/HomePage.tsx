import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
// import swordPNG from "../assets/images/logo/swordPNGsmall.png";
// import Image from "next/image";
// import { motion } from "framer-motion";

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
         <div className="w-3/5 h-full">
            <MouseParallaxContainer
               useWindowMouseEvents={true}
               className="h-full w-full flex items-center justify-center space-x-3"
            >
               <MouseParallaxChild factorX={0.03} factorY={0.05}>
                  <div className="bg-blue-600 h-20 w-20"></div>
               </MouseParallaxChild>
               <MouseParallaxChild factorX={0.07} factorY={0.08}>
                  <div className="bg-green-600 h-20 w-20"></div>
               </MouseParallaxChild>
               <MouseParallaxChild
                  factorX={0.07}
                  factorY={0.08}
                  updateStyles={{
                     filter: "invert(1)",
                  }}
                  className="bg-red-600 h-20 w-20"
               ></MouseParallaxChild>
            </MouseParallaxContainer>
            {/* <div className="bg-green-600 h-20 w-20 absolute top-20"></div>
            <div className="bg-blue-600 h-20 w-20 absolute bottom-20"></div>
            <div className="bg-red-600 h-20 w-20 absolute right-20"></div> */}
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
