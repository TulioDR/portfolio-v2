import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Props = { name: string; errors: any; touched: any };

export default function ErrorMessage({ errors, touched, name }: Props) {
   const [showMessage, setShowMessage] = useState<boolean>(false);

   const revealMessage = () => {
      setShowMessage(true);
   };
   const hideMessage = () => {
      setShowMessage(false);
   };

   return (
      <>
         <AnimatePresence>
            {touched[name] && errors[name] && (
               <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  exit={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={revealMessage}
                  onHoverEnd={hideMessage}
                  className="bg-red-700 absolute top-0 right-0 h-12 w-12 cursor-default hidden sm:block"
               >
                  <div className="h-full w-full flex items-center justify-center relative">
                     <span className="material-icons text-3xl">warning</span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
         <AnimatePresence>
            {showMessage && (
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 h-12 z-10 overflow-hidden"
               >
                  <div className="absolute right-0 bg-red-700 flex flex-col justify-center items-center h-full w-72 xl:w-80 2xl:w-96">
                     {errors[name].message2 ? (
                        <>
                           <div>{errors[name].message1}</div>
                           <div>{errors[name].message2}</div>
                        </>
                     ) : (
                        <div>{errors[name]}</div>
                     )}
                  </div>
               </motion.div>
            )}
         </AnimatePresence>
      </>
   );
}
