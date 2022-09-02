import SectionContainer from "../../components/Sections/SectionContainer";
import aboutImage from "../../assets/images/skills.jpg";

import InfoContainer from "../../components/Sections/InfoContainer";

import Info from "../../components/Sections/Info";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";
import { SwiperSlide } from "swiper/react";
import Jumbotron from "../Parts/Jumbotron";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";
import SwiperSlideInner from "../../components/Sections/SwiperSlideInner";
import Title from "../Parts/Title";

type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3 } =
      currentIdiom.about;
   return (
      <SectionContainer index={1}>
         <SwiperSlide>
            <SwiperSlideInner>
               <InfoContainer>
                  <Title>{title}</Title>
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
                  <SlideNextBtn text="Check my skills" />
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
            </SwiperSlideInner>
         </SwiperSlide>
         <SwiperSlide className="w-full h-full flex flex-col sm:hidden">
            <SwiperSlideInner mobile>
               <Jumbotron
                  tag="table"
                  imgSrc={aboutImage}
                  imgAlt="about-background"
               >
                  <SkillsShowcase />
               </Jumbotron>
               <SlidePrevBtn />
            </SwiperSlideInner>
         </SwiperSlide>
      </SectionContainer>
   );
}
