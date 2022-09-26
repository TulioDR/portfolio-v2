import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import useRouteContext from "../context/RouteContext";
import { projectsList } from "../assets/constants/projects";
import { useEffect } from "react";

import arrowLeft from "../assets/images/arrow-left.svg";

type Props = {
   currentProject: any;
};

Project.getInitialProps = async ({ query }: any) => {
   const project = projectsList.find((p) => p.link === query.project);
   return { currentProject: project };
};

export default function Project({ currentProject }: Props) {
   const { setForwardAnimation, goBack } = useRouteContext();

   useEffect(() => {
      setForwardAnimation(false);
   }, [setForwardAnimation]);

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
            <div className="h-screen w-screen relative">
               <Image
                  src={currentProject?.img}
                  alt="background"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  className="brightness-[0.5]"
                  priority
               />
            </div>

            <div className="h-screen bg-white text-black w-full p-10"></div>
            <div className="absolute top-32 left-16 overflow-hidden w-16 h-9">
               <motion.button
                  initial={{ x: "100%" }}
                  animate={{ x: 0, transition: { duration: 0.6 } }}
                  exit={{ x: "-100%", transition: { duration: 0.6 } }}
                  onClick={execute}
                  className="w-full h-full relative"
               >
                  <Image src={arrowLeft} alt="back" layout="fill" />
               </motion.button>
            </div>
         </motion.div>
      </>
   );
}
