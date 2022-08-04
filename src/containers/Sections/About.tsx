import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import aboutImage from "../../assets/images/skills.jpg";
import Underline from "../../components/Sections/Underline";
import { useState } from "react";

import { mainSkills } from "../../assets/constants/skills";
import { otherSkills } from "../../assets/constants/skills";

import Language from "../../components/About/Language";
import SkillsGrid from "../../components/About/SkillsGrid";

import SkillsTab from "../../components/About/SkillsTab";
import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";

import Info from "../../components/Sections/Info";
import JumbotronBackgroundImage from "../../components/Sections/JumbotronBackgroundImage";

type Props = {};

export default function About({}: Props) {
   const [showMainSkills, setShowMainSkills] = useState<Boolean>(true);

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
            <div className="absolute space-y-5 top-0 w-full h-full flex items-center">
               <div className="mx-auto">
                  <div className="px-5 mb-3 rounded-md">
                     <div className="flex space-x-5 text-lg border-b border-gray-400">
                        <SkillsTab
                           isMainSkill={true}
                           showMainSkills={showMainSkills}
                           onClick={() => setShowMainSkills(true)}
                        >
                           Main Skills
                        </SkillsTab>
                        <SkillsTab
                           isMainSkill={false}
                           showMainSkills={showMainSkills}
                           onClick={() => setShowMainSkills(false)}
                        >
                           Other Skills
                        </SkillsTab>
                     </div>
                  </div>

                  <div className="flex relative overflow-hidden">
                     <SkillsGrid showMainSkills={showMainSkills} mainSkills>
                        {mainSkills.map((skill) => (
                           <Language key={skill.name} skill={skill} />
                        ))}
                     </SkillsGrid>
                     <SkillsGrid showMainSkills={!showMainSkills}>
                        {otherSkills.map((skill) => (
                           <Language key={skill.name} skill={skill} />
                        ))}
                     </SkillsGrid>
                  </div>
               </div>
            </div>
         </JumbotronContainer>
      </SectionContainer>
   );
}
