import React, { useEffect, useState, createContext, useContext } from "react";
import english from "../translations/en/global.json";
import spanish from "../translations/es/global.json";

interface AppContextInterface {
   isEnglish: boolean;
   toggleLanguage: React.Dispatch<React.SetStateAction<boolean>>;
   currentIdiom: any;
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
   useEffect(() => {
      const language: any = isEnglish ? english : spanish;
      setCurrentIdiom(language);
   }, [isEnglish]);

   const value = {
      isEnglish,
      toggleLanguage,
      currentIdiom,
   };
   return (
      <LanguageContext.Provider value={value}>
         {children}
      </LanguageContext.Provider>
   );
}
