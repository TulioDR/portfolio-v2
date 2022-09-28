import Image from "next/image";
// import {
//    MouseParallaxChild,
//    MouseParallaxContainer,
// } from "react-parallax-mouse";

import JumbotronAnimation from "../Jumbotron/JumbotronAnimation";
import useRouteContext from "../../context/RouteContext";
import { motion } from "framer-motion";

type Props = {
   projectRef: any;
   project: any;
   layout?: string;
   showTitle: boolean;
   setShowTitle: any;
};

export default function Project({
   projectRef,
   project,
   layout,
   showTitle,
   setShowTitle,
}: Props) {
   const { goForward } = useRouteContext();

   const execute = () => {
      setShowTitle(false);
      setTimeout(() => {
         goForward(project.img, projectRef, project.link);
      }, 500);
   };

   return (
      <div
         ref={projectRef}
         className={`relative overflow-hidden cursor-pointer ${layout}`}
         onClick={execute}
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
         <motion.div
            animate={{
               y: showTitle ? 0 : "100%",
               transition: { duration: 0.5 },
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
         <JumbotronAnimation />
      </div>
   );
}
