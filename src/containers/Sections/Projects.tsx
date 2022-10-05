import SectionContainer from "../../components/Sections/SectionContainer";
import useLanguageContext from "../../context/LanguageContext";
import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";

import Underline from "../../components/Sections/Underline";
import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import { useEffect } from "react";
import useRouteContext from "../../context/RouteContext";
import Title from "../../components/Main/Title";
import RevealToTop from "../../animations/RevealToTop";

type Props = {};
export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.projects;

   const { setValues, selectedProjectId, setBackAnimation } = useRouteContext();

   useEffect(() => {
      if (selectedProjectId) {
         const project = document.getElementById(selectedProjectId)!;
         setValues(project);
         setTimeout(() => setBackAnimation(false), 50);
      }
   }, []);

   return (
      <SectionContainer>
         <div className="h-full w-full flex flex-col">
            <div className="overflow-hidden mb-2">
               <div className="flex items-center space-x-5 pb-2">
                  <RevealToTop>
                     <Title>{title}</Title>
                  </RevealToTop>
                  <Underline projects />
               </div>
            </div>
            <ProjectsShowcase />
            <MobileProjectsShowcase />
         </div>
      </SectionContainer>
   );
}
