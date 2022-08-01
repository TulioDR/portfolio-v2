import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {
   placeholder: string;
   icon: string;
   type: string;
};

export default function Input({ placeholder, icon, type }: Props) {
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
               <input
                  onFocus={() => setIsOnFocus(true)}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  onChange={(e) => setInputValue(e.target.value)}
                  type="text"
                  className="w-full pr-3 py-2 text-gray-300 bg-transparent focus:outline-none "
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
