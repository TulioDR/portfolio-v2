import useRouteContext from "../../context/RouteContext";
import { motion } from "framer-motion";
import RevealImageAnimation from "../../animations/RevealImageAnimation";
import { useEffect, useState } from "react";
import ProjectImage from "../Main/ProjectImage";

type Props = {
   project: any;
   layout?: string;
};
export default function Project({ project, layout }: Props) {
   const { openProjectDetails, selectedProjectId, setSelectedProjectId } =
      useRouteContext();
   const [showTitle, setShowTitle] = useState<boolean>(false);

   useEffect(() => {
      if (project.link !== selectedProjectId) {
         setShowTitle(true);
      } else {
         setTimeout(() => {
            setShowTitle(true);
            setSelectedProjectId("");
         }, 1000);
      }
   }, [selectedProjectId, setSelectedProjectId, project.link]);

   const goToDetails = () => {
      setShowTitle(false);
      setTimeout(() => {
         openProjectDetails(project.img, project.link, project.link);
      }, 300);
   };

   return (
      <div
         id={project.link}
         className={`relative overflow-hidden cursor-pointer ${layout}`}
         onClick={goToDetails}
      >
         <ProjectImage src={project.img} alt={project.title} />
         <motion.div
            animate={{
               y: showTitle ? 0 : "100%",
               transition: { duration: 0.3 },
            }}
            className="absolute w-full bottom-0 left-0 pb-3 pl-4 pt-10 text-2xl font-semibold bg-gradient-to-t from-primaryDark to-transparent"
         >
            {project.title}
         </motion.div>
         <RevealImageAnimation />
      </div>
   );
}
