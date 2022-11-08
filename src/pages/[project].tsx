import Head from "next/head";
import useRouteContext from "../context/RouteContext";
import { useEffect, useState } from "react";
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
import MobileLayout from "../components/ViewProject/Technologies/MobileLayout";
import ViewCodeBtn from "../components/ViewProject/ViewCodeBtn";
import MainButton from "../components/Main/MainButton";
import ProjectImage from "../components/Main/ProjectImage";
import Image from "next/image";
import Layout7 from "../components/ViewProject/Technologies/Layout7";
import Layout9 from "../components/ViewProject/Technologies/Layout9";
import Layout16 from "../components/ViewProject/Technologies/Layout16";
import { useRouter } from "next/router";
import english from "../translations/en/global";

type Props = {
   currentProjectEnglish: any;
};

export async function getServerSideProps({ query }: any) {
   const project = english.projects.projectsList.find(
      (p: any) => p.mainInfo.link === query.project
   );
   return { props: { currentProjectEnglish: project } };
}

export default function Project({ currentProjectEnglish }: Props) {
   const { setForwardAnimation, closeProjectDetails } = useRouteContext();
   const { currentIdiom } = useLanguageContext();

   const [currentProject, setCurrentProject] = useState<any>(
      currentProjectEnglish
   );

   const router = useRouter();
   useEffect(() => {
      const link = router.query.project;
      if (!link) return;
      const project = currentIdiom.projects.projectsList.find(
         (p: any) => p.mainInfo.link === link
      );
      setCurrentProject(project);
   }, [router.query.project, currentIdiom.projects.projectsList]);

   const { title, website, repository } = currentProject.mainInfo;
   const { description, role, date, overview, features, technologies } =
      currentProject;

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

   const goBackBtn = (mobile?: boolean) => {
      const { img, link } = currentProject.mainInfo;
      if (window.scrollY) {
         animateScroll.scrollToTop({ duration: 800, smooth: true });
         setTimeout(() => {
            closeProjectDetails(img, mobile ? "mobile-projects" : link, link);
         }, 800);
      } else {
         closeProjectDetails(img, mobile ? "mobile-projects" : link, link);
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
            <title>{`${title} Showcase`}</title>
         </Head>
         <div className="relative">
            <BackBtn onClick={goBackBtn} />
            <BackBtn onClick={goBackBtn} mobile />
            <div className="h-screen w-full relative">
               <ProjectImage
                  src={currentProjectEnglish.mainInfo.img}
                  alt="background"
                  background
               />
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
                        <CardInner>
                           {feature.img && (
                              <Image
                                 src={feature.img}
                                 alt={feature.name}
                                 layout="fill"
                                 priority
                              />
                           )}
                        </CardInner>
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
                  {technologies.length === 7 && (
                     <Layout7 technologies={technologies} />
                  )}
                  <MobileLayout technologies={technologies} />
               </InformationContainer>

               <BottomBackBtn onClick={goBackBtn}>{back}</BottomBackBtn>
               <BottomBackBtn onClick={goBackBtn} mobile>
                  {back}
               </BottomBackBtn>
            </ProjectDetailsContainer>
         </div>
      </>
   );
}
