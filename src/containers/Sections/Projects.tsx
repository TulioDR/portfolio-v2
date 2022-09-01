import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import Info from "../../components/Sections/Info";

import projectsImg from "../../assets/images/projects.jpg";

import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";
import { SwiperSlide } from "swiper/react";
import Jumbotron from "../Parts/Jumbotron";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";

type Props = {};

export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, subtitle1, subtitle2 } = currentIdiom.projects;
   return (
      <SectionContainer index={2}>
         <SwiperSlide className="flex">
            <InfoContainer>
               <TagContainer tag="h2">
                  <SectionTitle>{title}</SectionTitle>
                  <Underline />
               </TagContainer>
               <TagContainer tag="p">
                  <Info>
                     <div className="min-w-max">
                        <div>{subtitle1}</div>
                        <div>{subtitle2}</div>
                     </div>
                  </Info>
               </TagContainer>
               <SlideNextBtn text="Check my projects" />
            </InfoContainer>
            <div className="w-2/3 hidden sm:block">
               <Jumbotron
                  tag="picture"
                  imgSrc={projectsImg}
                  imgAlt="contact-form-background"
               >
                  <div className="w-full h-full flex flex-col">
                     <ProjectsShowcase />
                  </div>
               </Jumbotron>
            </div>
         </SwiperSlide>
         <SwiperSlide className="w-full h-full flex flex-col sm:hidden">
            <Jumbotron
               tag="picture"
               imgSrc={projectsImg}
               imgAlt="contact-form-background"
            >
               <div className="w-full h-full flex flex-col justify-center space-y-5">
                  <MobileProjectsShowcase />
               </div>
            </Jumbotron>
            <SlidePrevBtn />
         </SwiperSlide>
      </SectionContainer>
   );
}
