import { useState } from "react";
import {
   mainSkillsArray,
   otherSkillsArray,
} from "../../assets/constants/skills";
import Language from "./Language";
import SkillsGrid from "./SkillsGrid";
import SkillsTab from "./SkillsTab";

import useLanguageContext from "../../context/LanguageContext";

type Props = {};

export default function SkillsShowcase({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { mainSkills, otherSkills } = currentIdiom.about;

   const [isMain, setIsMain] = useState<boolean>(true);

   return (
      <div className="flex flex-col justify-center items-center">
         <div className="px-4 w-full">
            <ul className="flex space-x-5 mb-5 2xl:mb-6 text-lg border-b border-gray-400">
               <SkillsTab
                  onClick={() => setIsMain(true)}
                  isMain={isMain}
                  main={true}
               >
                  {mainSkills}
               </SkillsTab>
               <SkillsTab
                  onClick={() => setIsMain(false)}
                  isMain={isMain}
                  main={false}
               >
                  {otherSkills}
               </SkillsTab>
            </ul>
         </div>
         <div className="flex w-min overflow-hidden relative">
            <SkillsGrid main isMain={isMain}>
               {mainSkillsArray.map((skill) => (
                  <Language key={skill.name} skill={skill} />
               ))}
            </SkillsGrid>

            <SkillsGrid isMain={isMain}>
               {otherSkillsArray.map((skill) => (
                  <Language key={skill.name} skill={skill} />
               ))}
            </SkillsGrid>
         </div>
      </div>
   );
}
