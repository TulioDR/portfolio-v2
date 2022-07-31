import SectionContainer from "../../components/Sections/SectionContainer";

import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";
import InfoContainer from "../../components/Sections/InfoContainer";
import Info from "../../components/Sections/Info";

type Props = {};

export default function HomePage({}: Props) {
   return (
      <SectionContainer index={0}>
         <InfoContainer>
            <SectionTitle>
               <div className="mb-2 text-8xl">TULIO</div>
               <div className="text-8xl">RUZO</div>
            </SectionTitle>
            <Underline />
            <Info>Web Developer</Info>
         </InfoContainer>
         <div
            className="absolute top-1/2 -translate-y-1/2"
            style={{ left: 800 }}
         >
            <div
               className="relative translate-y-10"
               style={{ width: 500, height: 500 }}
            >
               <img
                  src="/logo/moon.svg"
                  alt="moon"
                  className="h-full w-full -rotate-45"
               />
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
