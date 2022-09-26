import Head from "next/head";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import Image from "next/image";
import useRouteContext from "../context/RouteContext";
import { projectsList } from "../assets/constants/projects";
import { useEffect, useState } from "react";

type Props = {};

export default function Project({}: Props) {
   const router = useRouter();
   const query = router.query.project;

   const { setForwardAnimation, goBack } = useRouteContext();
   const [currentProject, setCurrentProject] = useState<any>(null);

   useEffect(() => {
      const project = projectsList.find((p) => p.link === query);
      setCurrentProject(project);
      setForwardAnimation(false);
   }, [query, setForwardAnimation]);

   const execute = () => {
      goBack(currentProject.img, currentProject.link);
   };

   return (
      <>
         <Head>
            <title>Film Organizer</title>
         </Head>
         <motion.div
            exit={{ transition: { duration: 1 } }}
            className="relative h-screen overflow-y-auto overflow-x-hidden"
         >
            {currentProject && (
               <div className="h-screen w-screen relative">
                  <Image
                     src={currentProject.img}
                     alt="background"
                     layout="fill"
                     objectFit="cover"
                     objectPosition="top"
                     className="brightness-[0.5]"
                     priority
                  />
               </div>
            )}
            <div className="h-screen bg-white text-black w-full p-10"></div>
            {currentProject && (
               <button
                  onClick={execute}
                  className="absolute top-32 left-16 px-4 py-3 bg-primaryDark rounded-md"
               >
                  Return
               </button>
            )}
         </motion.div>
      </>
   );
}
