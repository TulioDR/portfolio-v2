import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import aboutImage from "../../assets/images/skills.jpg";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";

import Info from "../../components/Sections/Info";
import JumbotronBackgroundImage from "../../components/Sections/JumbotronBackgroundImage";
import JumbotronInnerContainer from "../../components/Sections/JumbotronInnerContainer";
import SkillsShowcase from "./SkillsShowcase";

type Props = {};

export default function About({}: Props) {
   return (
      <SectionContainer index={1}>
         <InfoContainer>
            <SectionTitle>About Me</SectionTitle>
            <Underline />
            <Info>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  I'm a self-taught developer that fell in love with React and
                  Next.js.
               </div>
            </Info>
            <Info>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  I'm a well-organized person, problem solver with high
                  attention to detail and I speak spanish and english. This is
                  more than “just a job” for me.
               </div>
            </Info>
            <Info>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  It's a passion that motivates me to learn and improve my
                  skills day by day, either with my team or on my own.
               </div>
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
