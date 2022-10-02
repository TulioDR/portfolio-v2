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
import BottomBackBtn from "../components/ViewProject/BottomBackBtn";
import ProjectDetailsContainer from "../components/ViewProject/ProjectDetailsContainer";

import { animateScroll } from "react-scroll";
import Title from "../components/Main/Title";

import RevealToRight from "../animations/RevealToRight";
import Underline from "../components/Sections/Underline";
import ProjectDescription from "../components/ViewProject/ProjectDescription";
import useLanguageContext from "../context/LanguageContext";
import Layout16 from "../components/ViewProject/Technologies/Layout16";
import MobileLayout from "../components/ViewProject/Technologies/MobileLayout";
import Layout6 from "../components/ViewProject/Technologies/Layout6";
import Layout9 from "../components/ViewProject/Technologies/Layout9";
import ViewCodeBtn from "../components/ViewProject/ViewCodeBtn";
import MainButton from "../components/Main/MainButton";

type Props = {
   currentProject: any;
};

Project.getInitialProps = async ({ query }: any) => {
   const project = projectsList.find((p) => p.link === query.project);
   return { currentProject: project };
};

export default function Project({ currentProject }: Props) {
   const { setForwardAnimation, goBack } = useRouteContext();

   const { currentProjectIdiom, currentIdiom } = useLanguageContext();

   const translation = currentProjectIdiom[currentProject.link];
   const {
      description,
      title,
      img,
      role,
      date,
      overview,
      features,
      technologies,
      website,
      repository,
   } = translation;

   const {
      visitSite,
      viewCode,
      roleText,
      dateTitle,
      overviewTitle,
      featuresText,
      technologiesUsed,
      back,
   } = currentIdiom.viewProject;

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

   const goToWebsite = () => {
      window.open(website, "_blank");
   };

   const goToRepo = () => {
      window.open(repository, "_blank");
   };

   return (
      <>
         <Head>
            <title>{title} Showcase</title>
         </Head>
         <div className="relative">
            <BackBtn onClick={goBackBtn} />
            <div className="h-screen w-full relative">
               <div className="relative h-full w-screen">
                  <Image
                     src={img}
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
                     <Title>{title}</Title>
                  </RevealToRight>
                  <RevealToRight>
                     <Underline />
                  </RevealToRight>
                  <RevealToRight>
                     <ProjectDescription>{description}</ProjectDescription>
                  </RevealToRight>
                  <MainButton onClick={goToWebsite}>{visitSite}</MainButton>
               </BackgroundGradient>
               <ViewCodeBtn onClick={goToRepo} mobile>
                  {viewCode}
               </ViewCodeBtn>
               <ViewCodeBtn onClick={goToRepo}>{viewCode}</ViewCodeBtn>
            </div>
            <ProjectDetailsContainer>
               <InformationContainer>
                  <div className="sm:flex justify-between space-y-5 sm:space-y-0 sm:space-x-10">
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>{roleText}</Subtitle>
                        <div>{role}</div>
                     </div>
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>{dateTitle}</Subtitle>
                        <div>{date}</div>
                     </div>
                     <div className="space-y-3 sm:space-y-5">
                        <Subtitle>{overviewTitle}</Subtitle>
                        <div>{overview}</div>
                     </div>
                  </div>
               </InformationContainer>

               <MainSubtitle>{featuresText}</MainSubtitle>
               {features.map((feature: any, index: number) => (
                  <InformationContainer key={index}>
                     <CardContainer reverse={index % 2 != 0}>
                        <CardInner />
                        <CardInner info>
                           <Subtitle>{feature.name}</Subtitle>
                           <div className="text-lg">{feature.description}</div>
                        </CardInner>
                     </CardContainer>
                  </InformationContainer>
               ))}

               <MainSubtitle>{technologiesUsed}</MainSubtitle>
               <InformationContainer>
                  {technologies.length === 16 && (
                     <Layout16 technologies={technologies} />
                  )}
                  {technologies.length === 9 && (
                     <Layout9 technologies={technologies} />
                  )}
                  {technologies.length === 6 && (
                     <Layout6 technologies={technologies} />
                  )}
                  <MobileLayout technologies={technologies} />
               </InformationContainer>

               <BottomBackBtn onClick={goBackBtn}>{back}</BottomBackBtn>
            </ProjectDetailsContainer>
         </div>
      </>
   );
}
