import { AnimatePresence } from "framer-motion";
import { useSwiper } from "swiper/react";
import RevealToRight from "../../animations/RevealToRight";
import Logo from "../../components/Home/Logo";
import Title from "../../components/Main/Title";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import Underline from "../../components/Sections/Underline";
import useLanguageContext from "../../context/LanguageContext";

type Props = {};

export default function HomePage({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { webDeveloper } = currentIdiom.home;
   const swiper = useSwiper();

   return (
      <SectionContainer>
         <div className="flex flex-col sm:flex-row w-full">
            <InfoContainer>
               <RevealToRight>
                  <Title>
                     <div className="space-y-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
                        <div>TULIO</div>
                        <div>RUZO</div>
                     </div>
                  </Title>
               </RevealToRight>
               <RevealToRight>
                  <Underline />
               </RevealToRight>
               <RevealToRight>
                  <Info>{webDeveloper}</Info>
               </RevealToRight>
            </InfoContainer>
            <div className="w-full sm:w-1/2 h-full flex items-center justify-center">
               <AnimatePresence>
                  {swiper.activeIndex === 0 && <Logo />}
               </AnimatePresence>
            </div>
         </div>
      </SectionContainer>
   );
}
