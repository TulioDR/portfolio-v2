import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import useRouteContext from "../context/RouteContext";
import { projectsList } from "../assets/constants/projects";
import { useEffect } from "react";
import BackBtn from "../components/ViewProject/BackBtn";
import ProjectTitle from "../components/ViewProject/ProjectTitle";
import BackgroundGradient from "../components/ViewProject/BackgroundGradient";
import Underline from "../components/Sections/Underline";
import InformationContainer from "../components/ViewProject/InformationContainer";
import Subtitle from "../components/ViewProject/Subtitle";
import CardContainer from "../components/ViewProject/CardContainer";
import CardInner from "../components/ViewProject/CardInner";
import MainSubtitle from "../components/ViewProject/MainSubtitle";
import TechnologyCard from "../components/ViewProject/TechnologyCard";
import ViewCodeBtn from "../components/ViewProject/ViewCodeBtn";
import BottomBackBtn from "../components/ViewProject/BottomBackBtn";
import ProjectDetailsContainer from "../components/ViewProject/ProjectDetailsContainer";
import useNavbarContext from "../context/NavbarContext";

type Props = {
   currentProject: any;
};

const projectFeatures = [1, 2, 3, 4, 5, 6, 7];

Project.getInitialProps = async ({ query }: any) => {
   const project = projectsList.find((p) => p.link === query.project);
   return { currentProject: project };
};

export default function Project({ currentProject }: Props) {
   const { setForwardAnimation, goBack } = useRouteContext();

   const { container } = useNavbarContext();

   useEffect(() => {
      setForwardAnimation(false);
   }, [setForwardAnimation]);

   const execute = () => {
      container.current!.scrollIntoView({ behavior: "smooth" });
      const { img, link } = currentProject;
      if (!container.current?.scrollTop) {
         goBack(img, link);
      } else {
         setTimeout(() => {
            goBack(img, link);
         }, 200);
      }
   };
   return (
      <>
         <Head>
            <title>Film Organizer</title>
         </Head>
         <motion.div
            ref={container}
            exit={{ transition: { duration: 0.7 } }}
            className="relative h-screen overflow-y-auto overflow-x-hidden"
         >
            <BackBtn onClick={execute} />
            <div className="h-screen w-full relative">
               <div className="relative h-full w-screen">
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
               <div className="h-full w-full absolute top-0 left-0">
                  <BackgroundGradient>
                     <ProjectTitle>{currentProject.name}</ProjectTitle>
                     <Underline />
                     <div className="text-2xl font-medium w-1/2">
                        Find The movies and tv shows you love and keep track of
                        them in any way you want
                     </div>
                     <button className="rounded-full bg-secondary w-max text-xl px-10 py-2">
                        Visit Site
                     </button>
                  </BackgroundGradient>
               </div>
               <ViewCodeBtn />
            </div>
            <ProjectDetailsContainer>
               <InformationContainer>
                  <div className="space-y-5">
                     <Subtitle>Role</Subtitle>
                     <div>UI Design / Coding</div>
                  </div>
                  <div className="space-y-5">
                     <Subtitle>Date</Subtitle>
                     <div>SEP 2021</div>
                  </div>
                  <div className="space-y-5">
                     <Subtitle>Overview</Subtitle>
                     <div>Page made using TMDB api</div>
                  </div>
               </InformationContainer>

               <MainSubtitle>Features</MainSubtitle>
               {projectFeatures.map((i, index) => (
                  <InformationContainer key={i}>
                     <CardContainer reverse={index % 2 != 0}>
                        <CardInner />
                        <CardInner info>
                           <Subtitle>Login Page</Subtitle>
                        </CardInner>
                     </CardContainer>
                  </InformationContainer>
               ))}

               <MainSubtitle>Technologies Used</MainSubtitle>
               <InformationContainer>
                  <div className="grid grid-cols-5 gap-5 w-full">
                     <div className="flex flex-col justify-center space-y-5">
                        <TechnologyCard />
                     </div>
                     <div className="flex flex-col justify-center space-y-5">
                        <TechnologyCard />
                        <TechnologyCard />
                     </div>
                     <div className="flex flex-col justify-center space-y-5">
                        <TechnologyCard />
                        <TechnologyCard />
                        <TechnologyCard />
                     </div>
                     <div className="flex flex-col justify-center space-y-5">
                        <TechnologyCard />
                        <TechnologyCard />
                     </div>
                     <div className="flex flex-col justify-center space-y-5">
                        <TechnologyCard />
                     </div>
                  </div>
               </InformationContainer>

               <BottomBackBtn />
            </ProjectDetailsContainer>
         </motion.div>
      </>
   );
}
