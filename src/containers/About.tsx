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

type Props = {
   currentIndex: number;
};

export default function About({ currentIndex }: Props) {
   const [showMainSkills, setShowMainSkills] = useState<Boolean>(true);

   return (
      <SectionContainer currentIndex={currentIndex} index={1}>
         <DescriptionContainer>
            <SectionTitle>About Me</SectionTitle>
            <Underline />
            <div className="space-y-5 text-xs lg:text-sm xl:text-base 2xl:text-lg w-5/6">
               <div>
                  I'm a self-taught developer, that after trying some javascript
                  frameworks and libraries, I fell in love with React, and by
                  extension with its most popular frameworks: "Next.js".
               </div>
               <div>
                  I'm a well-organized person, problem solver, employee with
                  high attention to detail and I speak spanish and english. This
                  is more than “just a job” for me. It is a passion that
                  motivates me to learn and improve my skills day by day, either
                  with my team or on my own.
               </div>
            </div>
         </DescriptionContainer>
         <CardContainer>
            <CardImage src={aboutImage} alt="about-background" />
            <div className="absolute space-y-5 w-full h-full flex items-center">
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
