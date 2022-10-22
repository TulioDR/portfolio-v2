import { useState } from "react";

import Language from "./Language";
import SkillsGrid from "./SkillsGrid";
import SkillsTab from "./SkillsTab";

import useLanguageContext from "../../context/LanguageContext";
import mainSkillsList from "../../assets/constants/mainSkillsList";
import otherSkillsList from "../../assets/constants/otherSkillsList";

type Props = {};

export default function SkillsShowcase({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { mainSkills, otherSkills } = currentIdiom.about;
   const [isMain, setIsMain] = useState<boolean>(true);

   return (
      <div className="flex flex-col justify-center items-center">
         <div className="px-3 w-full">
            <ul className="w-full flex space-x-4 mb-4 2xl:mb-6 text-lg border-b border-gray-400">
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
         <div className="w-min relative overflow-hidden">
            <div
               className={`w-full duration-300 ${
                  isMain ? "" : "-translate-x-full"
               } `}
            >
               <SkillsGrid main>
                  {mainSkillsList.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </SkillsGrid>
               <SkillsGrid selected={isMain}>
                  {otherSkillsList.map((skill) => (
                     <Language key={skill.name} skill={skill} />
                  ))}
               </SkillsGrid>
            </div>
         </div>
      </div>
   );
}
