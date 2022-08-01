import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = {
   placeholder: string;
   type: string;
   icon: string;
};

export default function MessageArea({ placeholder, type, icon }: Props) {
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);
   const [inputValue, setInputValue] = useState<string>("");

   const onBlur = () => {
      if (!inputValue.length) setIsOnFocus(false);
   };

   return (
      <div className="w-full">
         <label className="flex items-center space-x-2">
            <span className="material-icons w-6">{icon}</span>
            <span>{type}</span>
         </label>
         <div className="pl-8">
            <div className="w-full relative overflow-hidden">
               <textarea
                  onFocus={() => setIsOnFocus(true)}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  onChange={(e) => setInputValue(e.target.value)}
                  className={`w-full text-gray-300 mt-2 bg-transparent outline-none focus:outline-none resize-none ${
                     isOnFocus
                        ? "h-20 delay-300 duration-500"
                        : "h-6 duration-500"
                  }`}
               />
               <AnimatePresence>
                  {isOnFocus && (
                     <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-1 bg-secondary absolute bottom-0"
                     ></motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </div>
   );
}
