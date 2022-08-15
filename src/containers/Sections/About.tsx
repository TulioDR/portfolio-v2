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

type Props = {};

export default function About({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title } = currentIdiom.about;
   return (
      <SectionContainer index={1}>
         <InfoContainer>
            <SectionTitle>{title}</SectionTitle>
            <Underline />
            <Info about>
               <AboutInfoContainer>
                  I'm a self-taught developer that fell in love with React and
                  Next.js.
               </AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>
                  I'm a well-organized person, problem solver with high
                  attention to detail and I speak spanish and english. This is
                  more than “just a job” for me.
               </AboutInfoContainer>
            </Info>
            <Info about>
               <AboutInfoContainer>
                  It's a passion that motivates me to learn and improve my
                  skills day by day, either with my team or on my own.
               </AboutInfoContainer>
            </Info>
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
