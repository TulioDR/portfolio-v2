import { AnimatePresence } from "framer-motion";
import Logo from "../../components/Home/Logo";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import useLanguageContext from "../../context/LanguageContext";
import usePositionContext from "../../context/PositionContext";

import Title from "../Parts/Title";

type Props = {};

export default function HomePage({}: Props) {
   const { currentIndex } = usePositionContext();

   const { currentIdiom } = useLanguageContext();

   const { webDeveloper } = currentIdiom.home;
   return (
      <SectionContainer index={0}>
         <div className="flex flex-col sm:flex-row w-full">
            <InfoContainer>
               <Title>
                  <div className="space-y-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                     <div>TULIO</div>
                     <div>RUZO</div>
                  </div>
               </Title>

               <Info>{webDeveloper}</Info>
            </InfoContainer>
            <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
               <AnimatePresence>
                  {currentIndex === 0 && <Logo />}
               </AnimatePresence>
            </div>
         </div>
      </SectionContainer>
   );
}
