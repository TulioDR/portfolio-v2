import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import useRouteContext from "../../context/RouteContext";
import ProjectModel from "../../models/ProjectModel";
import ProjectImage from "../Main/ProjectImage";

type Props = {
   project: ProjectModel;
};

export default function MobileProject({ project }: Props) {
   const { openProjectDetails } = useRouteContext();
   const [showTitle, setShowTitle] = useState<boolean>(false);

   useEffect(() => {
      setTimeout(() => setShowTitle(true), 1000);
   }, []);

   const goToDetails = () => {
      setShowTitle(false);
      setTimeout(() => {
         openProjectDetails(project.img, "mobile-projects", project.link);
      }, 300);
   };

   return (
      <div
         className="w-full h-full relative cursor-pointer"
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
      </div>
   );
}
