import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import aboutImage from "../../assets/images/skills.jpg";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";

import Info from "../../components/Sections/Info";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";
import { SwiperSlide } from "swiper/react";
import Jumbotron from "../Parts/Jumbotron";
type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3 } =
      currentIdiom.about;
   return (
      <SectionContainer index={1}>
         <SwiperSlide className="flex">
            <InfoContainer>
               <TagContainer tag="h2">
                  <SectionTitle>{title}</SectionTitle>
                  <Underline />
               </TagContainer>
               <TagContainer tag="p">
                  <Info about>
                     <AboutInfoContainer>{description1}</AboutInfoContainer>
                  </Info>
                  <Info about>
                     <AboutInfoContainer>{description2}</AboutInfoContainer>
                  </Info>
                  <Info about>
                     <AboutInfoContainer>{description3}</AboutInfoContainer>
                  </Info>
               </TagContainer>
            </InfoContainer>
            <div className="w-2/3 hidden sm:block">
               <Jumbotron
                  tag="table"
                  imgSrc={aboutImage}
                  imgAlt="about-background"
               >
                  <SkillsShowcase />
               </Jumbotron>
            </div>
         </SwiperSlide>
         <SwiperSlide className="w-full h-full flex justify-end">
            <Jumbotron
               tag="table"
               imgSrc={aboutImage}
               imgAlt="about-background"
            >
               <SkillsShowcase />
            </Jumbotron>
         </SwiperSlide>
      </SectionContainer>
   );
}
