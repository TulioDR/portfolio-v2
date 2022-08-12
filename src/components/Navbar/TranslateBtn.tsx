import React from "react";

import useLanguageContext from "../../context/LanguageContext";

type Props = {};

export default function TranslateBtn({}: Props) {
   const { isEnglish, toggleLanguage } = useLanguageContext();
   return (
      <button className="flex items-center space-x-2" onClick={toggleLanguage}>
         <span className="material-icons">translate</span>
         <span className="flex items-center">
            <span
               className={`duration-300 ${
                  isEnglish ? "brightness-105" : "text-gray-400"
               }`}
            >
               en
            </span>
            <span style={{ padding: "0px 2px" }}>/</span>
            <span
               className={`duration-300 ${
                  !isEnglish ? "brightness-105" : "text-gray-400"
               }`}
            >
               es
            </span>
         </span>
      </button>
   );
}
