import { AnimatePresence } from "framer-motion";
import Logo from "../../components/Home/Logo";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import TagContainer from "../../components/Sections/TagContainer";
import useLanguageContext from "../../context/LanguageContext";
import usePositionContext from "../../context/PositionContext";
import Title from "../Parts/Title";

type Props = {};

export default function HomeD({}: Props) {
   const { currentIndex } = usePositionContext();

   const { currentIdiom } = useLanguageContext();

   const { webDeveloper } = currentIdiom.home;
   return (
      <div className="flex flex-col sm:flex-row w-full">
         <InfoContainer>
            <Title>
               <div className="space-y-2 text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
                  <div>TULIO</div>
                  <div>RUZO</div>
               </div>
            </Title>
            <TagContainer tag="p">
               <Info>{webDeveloper}</Info>
            </TagContainer>
         </InfoContainer>
         <div className="w-full sm:w-3/5 h-full flex items-center justify-center">
            <AnimatePresence>{currentIndex === 0 && <Logo />}</AnimatePresence>
         </div>
      </div>
   );
}