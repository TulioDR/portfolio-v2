import SectionContainer from "../../components/Sections/SectionContainer";
import { motion } from "framer-motion";
import useLanguageContext from "../../context/LanguageContext";
import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";

import Underline from "../../components/Sections/Underline";
import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import { useEffect } from "react";
import useRouteContext from "../../context/RouteContext";

type Props = {};
export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.projects;

   const { setPositionValues, selectedProject, setBackAnimation } =
      useRouteContext();

   useEffect(() => {
      if (selectedProject) {
         const { clientWidth, clientHeight, offsetLeft, offsetTop } =
            selectedProject?.current!;
         setPositionValues({
            width: clientWidth,
            height: clientHeight,
            x: offsetLeft,
            y: offsetTop,
         });

         setTimeout(() => setBackAnimation(false), 50);
      }
   }, [setPositionValues, selectedProject]);

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
            <ProjectsShowcase />
            <MobileProjectsShowcase />
         </div>
      </SectionContainer>
   );
}
