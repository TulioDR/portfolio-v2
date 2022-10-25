import AboutInfo from "../../components/About/AboutInfo";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import useLanguageContext from "../../context/LanguageContext";
import Jumbotron from "../Parts/Jumbotron";
import aboutImage from "../../assets/images/jumbotron/projects.jpg";
import { useState } from "react";
import Underline from "../../components/Sections/Underline";
import RevealToRight from "../../animations/RevealToRight";
import Title from "../../components/Main/Title";
import MainButton from "../../components/Main/MainButton";

type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3, checkMySkills } =
      currentIdiom.about;

   const [revealJumbotron, setRevealJumbotron] = useState<boolean>(false);
   const toggleJumbotron = () => setRevealJumbotron(!revealJumbotron);

   return (
      <SectionContainer>
         <InfoContainer>
            <RevealToRight>
               <Title>{title}</Title>
            </RevealToRight>
            <RevealToRight>
               <Underline />
            </RevealToRight>
            <RevealToRight about>
               <AboutInfo>{description1}</AboutInfo>
            </RevealToRight>
            <RevealToRight about>
               <AboutInfo>{description2}</AboutInfo>
            </RevealToRight>
            <RevealToRight about>
               <AboutInfo>{description3}</AboutInfo>
            </RevealToRight>
            <MainButton mobile onClick={toggleJumbotron}>
               {checkMySkills}
            </MainButton>
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
