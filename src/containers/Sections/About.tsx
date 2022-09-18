import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import useLanguageContext from "../../context/LanguageContext";

import Jumbotron from "../Parts/Jumbotron";
import Title from "../Parts/Title";

import aboutImage from "../../assets/images/projects.jpg";
import { useState } from "react";

type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3, checkMySkills } =
      currentIdiom.about;

   const [revealJumbotron, setRevealJumbotron] = useState<boolean>(false);
   const toggleJumbotron = () => setRevealJumbotron(!revealJumbotron);

   return (
      <SectionContainer index={1}>
         <InfoContainer>
            <Title>{title}</Title>
            <Info about>
               <AboutInfoContainer>{description1}</AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>{description2}</AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>{description3}</AboutInfoContainer>
            </Info>
            <SlideNextBtn text={checkMySkills} onClick={toggleJumbotron} />
         </InfoContainer>

         <Jumbotron
            reveal={revealJumbotron}
            toggle={toggleJumbotron}
            imgSrc={aboutImage}
            imgAlt="about-background"
         >
            <SkillsShowcase />
         </Jumbotron>
      </SectionContainer>
   );
}
