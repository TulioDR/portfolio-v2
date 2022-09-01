import SectionContainer from "../../components/Sections/SectionContainer";

import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";
import InfoContainer from "../../components/Sections/InfoContainer";
import Info from "../../components/Sections/Info";
import Logo from "../../components/Home/Logo";
import usePositionContext from "../../context/PositionContext";
import { AnimatePresence } from "framer-motion";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";
import { SwiperSlide } from "swiper/react";

type Props = {};

export default function HomePage({}: Props) {
   const { currentIndex } = usePositionContext();

   const { currentIdiom } = useLanguageContext();

   const { webDeveloper } = currentIdiom.home;

   return (
      <SectionContainer index={0}>
         <SwiperSlide className="flex">
            <InfoContainer>
               <TagContainer tag="h2">
                  <SectionTitle>
                     <div className="space-y-2 text-3xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                        <div>TULIO</div>
                        <div>RUZO</div>
                     </div>
                  </SectionTitle>
                  <Underline />
               </TagContainer>
               <TagContainer tag="p">
                  <Info>{webDeveloper}</Info>
               </TagContainer>
            </InfoContainer>
            <div className="w-full sm:w-3/5 h-full flex items-center justify-center">
               <AnimatePresence>
                  {currentIndex === 0 && <Logo />}
               </AnimatePresence>
            </div>
         </SwiperSlide>
      </SectionContainer>
   );
}
