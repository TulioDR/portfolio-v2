import { useState } from "react";
import { mainSkills, otherSkills } from "../../assets/constants/skills";
import Language from "../../components/About/Language";
import SkillsGrid from "../../components/About/SkillsGrid";
import SkillsTab from "../../components/About/SkillsTab";

type Props = {};

export default function SkillsShowcase({}: Props) {
   const [showMainSkills, setShowMainSkills] = useState<Boolean>(true);
   return (
      <div className="space-y-3">
         <div className="px-5">
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
   );
}
