import Head from "next/head";
import Image from "next/image";
import useRouteContext from "../context/RouteContext";
import { projectsList } from "../assets/constants/projects";
import { useEffect } from "react";
import BackBtn from "../components/ViewProject/BackBtn";

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
import VisitSiteBtn from "../components/ViewProject/VisitSiteBtn";

import { animateScroll } from "react-scroll";
import Title from "../components/Main/Title";

import RevealToRight from "../animations/RevealToRight";
import Underline from "../components/Sections/Underline";
import ProjectDescription from "../components/ViewProject/ProjectDescription";

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

   const goBackBtn = (mobile: boolean) => {
      const { img, link } = currentProject;
      if (window.scrollY) {
         animateScroll.scrollToTop({ duration: 800, smooth: true });
         setTimeout(() => goBack(img, link), 800);
      } else {
         goBack(img, link, mobile);
      }
   };

   return (
      <>
         <Head>
            <title>{currentProject.name} Showcase</title>
         </Head>
         <div className="relative">
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
               <BackgroundGradient>
                  <RevealToRight>
                     <Title>{currentProject.name}</Title>
                  </RevealToRight>
                  <RevealToRight>
                     <Underline />
                  </RevealToRight>
                  <RevealToRight>
                     <ProjectDescription />
                  </RevealToRight>
                  <VisitSiteBtn />
               </BackgroundGradient>
               <ViewCodeBtn />
            </div>
            <ProjectDetailsContainer>
               <InformationContainer>
                  <div className="sm:flex justify-between space-y-5 sm:space-y-0 sm:space-x-10">
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>Role</Subtitle>
                        <div>UI Design / Coding</div>
                     </div>
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>Date</Subtitle>
                        <div>SEP 2021</div>
                     </div>
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>Overview</Subtitle>
                        <div>
                           A film – also called a movie, motion picture, moving
                           picture, picture or photoplay – is a work of visual
                           art that simulates experiences and otherwise
                           communicates ideas, stories, perceptions, feelings,
                           beauty, or atmosphere through the use of moving
                           images
                        </div>
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
         </div>
      </>
   );
}
