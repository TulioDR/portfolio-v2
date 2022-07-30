import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import aboutImage from "../assets/images/skills.jpg";
import Underline from "../components/Underline";
import { useState } from "react";
import DescriptionContainer from "../components/DescriptionContainer";

import { mainSkills } from "../assets/constants/skills";
import { otherSkills } from "../assets/constants/skills";
import SkillsTab from "../components/SkillsTab";
import Language from "../components/Language";
import SkillsGrid from "../components/SkillsGrid";
import CardContainer from "../components/CardContainer";
import CardImage from "../components/CardImage";
import CardInfo from "../components/CardInfo";

type Props = {};

export default function About({}: Props) {
   const [showMainSkills, setShowMainSkills] = useState<Boolean>(true);

   return (
      <SectionContainer index={1}>
         <DescriptionContainer>
            <SectionTitle>About Me</SectionTitle>
            <Underline />
            <CardInfo>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  I'm a self-taught developer that fell in love with React and
                  Next.js.
               </div>
            </CardInfo>
            <CardInfo>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  I'm a well-organized person, problem solver with high
                  attention to detail and I speak spanish and english. This is
                  more than “just a job” for me.
               </div>
            </CardInfo>
            <CardInfo>
               <div className="text-xs lg:text-sm xl:text-base 2xl:text-lg">
                  It's a passion that motivates me to learn and improve my
                  skills day by day, either with my team or on my own.
               </div>
            </CardInfo>
         </DescriptionContainer>
         <CardContainer>
            <CardImage src={aboutImage} alt="about-background" />
            <div className="absolute space-y-5 top-0 w-full h-full flex items-center">
               <div className="mx-auto">
                  <div className="px-5 pt-2 pb-3 mb-3 bg-primary rounded-md">
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
         </CardContainer>
      </SectionContainer>
   );
}
