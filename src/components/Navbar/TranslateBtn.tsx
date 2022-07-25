import { useState } from "react";

type Props = {};

export default function TranslateBtn({}: Props) {
   const [isEnglish, setIsEnglish] = useState(false);
   const toggleLanguage = () => setIsEnglish(!isEnglish);
   return (
      <button className="flex items-center space-x-2" onClick={toggleLanguage}>
         <span className="material-icons">translate</span>
         <span className="">
            <span
               className={`duration-300 ${
                  isEnglish ? "brightness-105" : "text-gray-400"
               }`}
            >
               en
            </span>
            <span>/</span>
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
