import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import useRouteContext from "../context/RouteContext";
import { projectsList } from "../assets/constants/projects";
import { useEffect } from "react";
import BackBtn from "../components/ViewProject/BackBtn";
import ProjectTitle from "../components/ViewProject/ProjectTitle";
import BackgroundGradient from "../components/ViewProject/BackgroundGradient";

import InformationContainer from "../components/ViewProject/InformationContainer";
import Subtitle from "../components/ViewProject/Subtitle";
import CardContainer from "../components/ViewProject/CardContainer";
import CardInner from "../components/ViewProject/CardInner";
import MainSubtitle from "../components/ViewProject/MainSubtitle";
import TechnologyCard from "../components/ViewProject/TechnologyCard";
import ViewCodeBtn from "../components/ViewProject/ViewCodeBtn";
import BottomBackBtn from "../components/ViewProject/BottomBackBtn";
import ProjectDetailsContainer from "../components/ViewProject/ProjectDetailsContainer";
import ViewProjectUnderline from "../components/ViewProject/ViewProjectUnderline";
import VisitSiteBtn from "../components/ViewProject/VisitSiteBtn";
import ProjectDescription from "../components/ViewProject/ProjectDescription";

import { animateScroll } from "react-scroll";

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

   useEffect(() => {
      setForwardAnimation(false);
   }, [setForwardAnimation]);

   const goBackBtn = () => {
      const { img, link } = currentProject;
      if (window.scrollY) {
         animateScroll.scrollToTop({ duration: 800, smooth: true });
         setTimeout(() => goBack(img, link), 800);
      } else {
         goBack(img, link);
      }
   };

   return (
      <>
         <Head>
            <title>Film Organizer</title>
         </Head>
         <motion.div exit={{ transition: { delay: 10 } }} className="relative">
            <BackBtn onClick={goBackBtn} />
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
                     <ViewProjectUnderline />
                     <ProjectDescription />
                     <VisitSiteBtn />
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
                     <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores temporibus rem vero expedita molestiae quos
                        odio impedit aspernatur maiores voluptates.
                     </div>
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

               <BottomBackBtn onClick={goBackBtn} />
            </ProjectDetailsContainer>
         </motion.div>
      </>
   );
}
