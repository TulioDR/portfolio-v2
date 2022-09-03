import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import useLanguageContext from "../../context/LanguageContext";

type Props = {
   project: any;
};

// Do something with selected Pagination
export default function MobileProject({ project }: Props) {
   const [showButtons, setShowButtons] = useState<boolean>(false);
   const { currentIdiom } = useLanguageContext();
   const { viewCode, visitSite } = currentIdiom.projects;
   return (
      <article className="aspect-16/9 w-full bg-orange-800 drop-shadow-md relative">
         <div
            className="h-full w-full relative"
            onClick={() => setShowButtons(true)}
         >
            <Image
               alt="example"
               src={project.img}
               layout="fill"
               className="object-cover"
            />
         </div>
         <AnimatePresence>
            {showButtons && (
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-black flex items-center justify-center space-x-3 text-xs "
               >
                  <button
                     className="absolute top-1 right-1 rounded-md bg-secondary grid place-content-center p-1"
                     onClick={() => setShowButtons(false)}
                  >
                     <span className="material-icons">close</span>
                  </button>
                  <motion.a
                     initial={{ scale: 0.5 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0.5 }}
                     href={project.repository}
                     target="_blank"
                     rel="noreferrer"
                     className="bg-secondary rounded-full shadow-md h-16 w-16 grid place-content-center"
                  >
                     <span className="w-min text-center">{viewCode}</span>
                  </motion.a>
                  <motion.a
                     initial={{ scale: 0.5 }}
                     animate={{ scale: 1 }}
                     exit={{ scale: 0.5 }}
                     href={project.website}
                     target="_blank"
                     rel="noreferrer"
                     className="bg-secondary rounded-full shadow-md h-16 w-16 grid place-content-center"
                  >
                     <span className="w-min text-center">{visitSite}</span>
                  </motion.a>
               </motion.div>
            )}
         </AnimatePresence>
      </article>
   );
}
