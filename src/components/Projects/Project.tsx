// import {
//    MouseParallaxChild,
//    MouseParallaxContainer,
// } from "react-parallax-mouse";

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
   const { openProjectDetails, selectedProjectId } = useRouteContext();
   const [showTitle, setShowTitle] = useState<boolean>(false);

   useEffect(() => {
      if (project.link !== selectedProjectId) setShowTitle(true);
      else setTimeout(() => setShowTitle(true), 1000);
   }, [selectedProjectId, project.link]);

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
         <ProjectImage src={project.img} alt={project.name} />
         <motion.div
            animate={{
               y: showTitle ? 0 : "100%",
               transition: { duration: 0.3 },
            }}
            className="absolute w-full bottom-0 left-0 pb-3 pl-4 pt-10 text-2xl font-semibold bg-gradient-to-t from-primaryDark to-transparent"
         >
            {project.name}
         </motion.div>

         {/* <MouseParallaxContainer enabled={false} className="h-full w-full">
            <MouseParallaxChild
               factorX={0.03}
               factorY={0.03}
               className="w-full h-full bg-1/2 relative"
            >
               <Image
                  src={project.img}
                  alt="landscape"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="brightness-50"
                  priority
               />
               <div className="absolute w-full bottom-0 left-0 pb-3 pl-4 pt-10 text-2xl font-semibold bg-gradient-to-t from-primaryDark to-transparent">
                  {project.name}
               </div>
            </MouseParallaxChild>
         </MouseParallaxContainer> */}
         <RevealImageAnimation />
      </div>
   );
}
