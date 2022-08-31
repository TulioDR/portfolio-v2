import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import aboutImage from "../../assets/images/skills.jpg";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";

import Info from "../../components/Sections/Info";
import JumbotronBackgroundImage from "../../components/Sections/JumbotronBackgroundImage";
import JumbotronInnerContainer from "../../components/Sections/JumbotronInnerContainer";
import SkillsShowcase from "../../components/About/SkillsShowcase";
import AboutInfoContainer from "../../components/About/AboutInfoContainer";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";

type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, description1, description2, description3 } =
      currentIdiom.about;
   return (
      <SectionContainer index={1}>
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
         <JumbotronContainer>
            <JumbotronBackgroundImage src={aboutImage} alt="about-background" />
            <JumbotronInnerContainer>
               <SkillsShowcase />
            </JumbotronInnerContainer>
         </JumbotronContainer>
      </SectionContainer>
   );
}
