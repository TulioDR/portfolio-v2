import SectionContainer from "../../components/Sections/SectionContainer";

import { AnimatePresence, motion } from "framer-motion";
import useLanguageContext from "../../context/LanguageContext";
type Props = {};

import { useState } from "react";

import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";
import SelectedProject from "../../components/Projects/SelectedProject";
import ProjectShowcase from "../../components/Projects/ProjectShowcase";
import Underline from "../../components/Sections/Underline";

export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.projects;

   const [values, setValues] = useState<any>(null);

   return (
      <SectionContainer index={2}>
         <div className="h-full w-full flex flex-col">
            <div className="overflow-hidden mb-2">
               <div className="flex items-center space-x-5 pb-2">
                  <motion.div
                     initial={{ y: "100%" }}
                     animate={{ y: 0 }}
                     transition={{ duration: 0.6, delay: 0.5 }}
                     className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl tracking-wide"
                  >
                     {title}
                  </motion.div>
                  <Underline projects />
               </div>
            </div>
            <ProjectShowcase setValues={setValues} />
            <MobileProjectsShowcase />
            <AnimatePresence>
               {values && (
                  <SelectedProject values={values} setValues={setValues} />
               )}
            </AnimatePresence>
         </div>
      </SectionContainer>
   );
}
