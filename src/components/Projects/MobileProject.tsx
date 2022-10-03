import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import useRouteContext from "../../context/RouteContext";

type Props = {
   project: any;
};

export default function MobileProject({ project }: Props) {
   const { openProjectDetails } = useRouteContext();
   const [showTitle, setShowTitle] = useState<boolean>(true);

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
         <Image
            src={project.img}
            alt="landscape"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
         />
         <motion.div
            animate={{
               y: showTitle ? 0 : "100%",
               transition: { duration: 0.3 },
            }}
            className="absolute w-full bottom-0 left-0 pb-3 pl-4 pt-10 text-2xl font-semibold bg-gradient-to-t from-primaryDark to-transparent"
         >
            {project.name}
         </motion.div>
      </div>
   );
}
