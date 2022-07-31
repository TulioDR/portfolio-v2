// import {
//    MouseParallaxChild,
//    MouseParallaxContainer,
// } from "react-parallax-mouse";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
// import Image from "next/image";
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
            <CardInfo>
               <div>Web Developer</div>
            </CardInfo>
         </DescriptionContainer>
         <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: 800 }}
         >
            <div
               className="relative translate-y-10"
               style={{ width: 500, height: 500 }}
            >
               <img src="/logo/moon.svg" alt="moon" className="h-full w-full" />
               <div className="absolute flex items-center right-0 top-1/2 -translate-y-1/2">
                  <div className="text-6xl drop-shadow-lg shadow-black uppercase tracking-widest font-black text-secondary z-10 -translate-x-20 translate-y-6 ">
                     Portfolio
                  </div>
                  <img
                     src="/logo/shield.svg"
                     alt="shield"
                     className="z-10 -translate-x-16 translate-y-6 drop-shadow-lg shadow-black"
                     style={{ width: 150 }}
                  />
               </div>
            </div>
         </div>
      </SectionContainer>
   );
}
