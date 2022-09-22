import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";

import useLanguageContext from "../../context/LanguageContext";

import Jumbotron from "../Parts/Jumbotron";

import aboutImage from "../../assets/images/projects.jpg";
import { useState } from "react";
import RevealJumbotronBtn from "../../components/Sections/RevealJumbotronBtn";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

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
            <SectionTitle>{title}</SectionTitle>
            <Underline />
            <Info about>
               <AboutInfoContainer>{description1}</AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>{description2}</AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>{description3}</AboutInfoContainer>
            </Info>
            <RevealJumbotronBtn
               text={checkMySkills}
               onClick={toggleJumbotron}
            />
         </InfoContainer>

         <Jumbotron
            reveal={revealJumbotron}
            toggle={toggleJumbotron}
            imgSrc={aboutImage}
            imgAlt="about-background"
            about
         >
            <SkillsShowcase />
         </Jumbotron>
      </SectionContainer>
   );
}
