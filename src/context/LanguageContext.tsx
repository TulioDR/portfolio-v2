import React, { useEffect, useState, createContext, useContext } from "react";
import english from "../translations/en/global.json";
import spanish from "../translations/es/global.json";
import englishProjects from "../translations/en/projects.js";
import spanishProjects from "../translations/es/projects.js";

interface AppContextInterface {
   isEnglish: boolean;
   toggleLanguage: any;
   currentIdiom: any;
   currentProjectIdiom: any;
}
type Props = {
   children: React.ReactNode;
};
const LanguageContext = createContext({} as AppContextInterface);
export default function useLanguageContext() {
   return useContext(LanguageContext);
}
export function LanguageProvider({ children }: Props) {
   const [isEnglish, setIsEnglish] = useState<boolean>(true);
   const toggleLanguage = (): void => setIsEnglish(!isEnglish);

   const [currentIdiom, setCurrentIdiom] = useState(english);
   const [currentProjectIdiom, setCurrentProjectIdiom] =
      useState(englishProjects);
   useEffect(() => {
      const language: any = isEnglish ? english : spanish;
      setCurrentIdiom(language);
      const newLanguage: any = isEnglish ? englishProjects : spanishProjects;
      setCurrentProjectIdiom(newLanguage);
   }, [isEnglish]);

   const value = {
      isEnglish,
      toggleLanguage,
      currentIdiom,
      currentProjectIdiom,
   };
   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
