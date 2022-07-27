import React, { useEffect, useState } from "react";
import CardContainer from "../components/CardContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
import Project from "../components/Projects/Project";
import CardInfo from "../components/CardInfo";
import { AnimatePresence, motion } from "framer-motion";
import usePositionContext from "../context/PositionContext";
import ProjectsContainer from "../components/Projects/ProjectsContainer";
import ChangeViewBtn from "../components/Projects/ChangeViewBtn";
import CarouselPagination from "../components/Projects/CarouselPagination";
import CarouselPaginationContainer from "../components/Projects/CarouselPaginationContainer";

type Props = {};

const projectsArray = [1, 2, 3, 4, 5, 6, 7, 8];

export default function Projects({}: Props) {
   const { currentIndex } = usePositionContext();
   const [showCarousel, setShowCarousel] = useState(true);

   const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

   useEffect(() => {
      setTimeout(() => {
         setShowCarousel(true);
      }, 1000);
   }, [currentIndex]);

   const [selectedPagination, setSelectedPagination] = useState(1);

   return (
      <SectionContainer index={2}>
         <DescriptionContainer>
            <SectionTitle>Projects</SectionTitle>
            <Underline />
            <CardInfo delay={0.8}>
               <div>I love Animation, Technology,</div>
               <div>and Design</div>
            </CardInfo>
         </DescriptionContainer>
         <CardContainer>
            <div className="h-full w-full flex flex-col overflow-hidden bg-primary">
               <div className="flex-1 relative overflow-hidden">
                  <ProjectsContainer
                     selectedPagination={selectedPagination}
                     showCarousel={showCarousel}
                  >
                     {projectsArray.map((project) => (
                        <Project
                           key={project}
                           id={`${project}`}
                           showCarousel={showCarousel}
                           setSelectedId={setSelectedId}
                        />
                     ))}
                  </ProjectsContainer>

                  <CarouselPaginationContainer showCarousel={showCarousel}>
                     {projectsArray.map((project) => (
                        <CarouselPagination
                           key={project}
                           project={project}
                           selectedPagination={selectedPagination}
                           setSelectedPagination={setSelectedPagination}
                        />
                     ))}
                  </CarouselPaginationContainer>
               </div>

               <div className="w-full py-3 flex space-x-5 justify-center bg-primary border-t-2 border-white">
                  <ChangeViewBtn
                     onClick={() => setShowCarousel(true)}
                     icon="view_carousel"
                     showCarousel={showCarousel}
                  />
                  <ChangeViewBtn
                     onClick={() => setShowCarousel(false)}
                     icon="view_module"
                     showCarousel={!showCarousel}
                  />
               </div>
            </div>
         </CardContainer>
         <AnimatePresence>
            {selectedId && (
               <motion.div
                  layoutId={selectedId}
                  onClick={() => setSelectedId(undefined)}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-0 left-0 w-full h-screen bg-orange-800 z-50"
               ></motion.div>
            )}
         </AnimatePresence>
      </SectionContainer>
   );
}
