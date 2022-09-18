import SectionContainer from "../../components/Sections/SectionContainer";

import { motion } from "framer-motion";
import useLanguageContext from "../../context/LanguageContext";
import UnderlineProjects from "../../components/Projects/UnderlineProjects";
import NewProject from "../../components/Projects/NewProject";
type Props = {};

export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.projects;
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
                  <UnderlineProjects />
               </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-4 gap-4">
               <NewProject lg="col-span-3" />
               <NewProject lg="row-span-2" />
               <NewProject />
               <NewProject lg="col-span-2" />
            </div>
         </div>
      </SectionContainer>
   );
}
