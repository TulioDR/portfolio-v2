import { useEffect, useRef, useState } from "react";

import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";
import Project from "../../components/Projects/Project";

import { AnimatePresence, motion } from "framer-motion";
import ProjectsContainer from "../../components/Projects/ProjectsContainer";
import ChangeViewBtn from "../../components/Projects/ChangeViewBtn";
import CarouselPagination from "../../components/Projects/CarouselPagination";
import CarouselPaginationContainer from "../../components/Projects/CarouselPaginationContainer";
import CarouselNavigation from "../../components/Projects/CarouselNavigation";
import usePositionContext from "../../context/PositionContext";
import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";
import Info from "../../components/Sections/Info";

import projectsImg from "../../assets/images/projects.jpg";
import JumbotronImage from "../../components/Sections/JumbotronImage";

type Props = {};

const projectsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const { length } = projectsArray;
export default function Projects({}: Props) {
   const { currentIndex } = usePositionContext();

   const [showCarousel, setShowCarousel] = useState(true);

   const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

   const [selectedPagination, setSelectedPagination] = useState(1);
   const constrainRef = useRef(null);

   useEffect(() => {
      setTimeout(() => {
         setShowCarousel(true);
      }, 1000);
   }, [currentIndex]);
   return (
      <SectionContainer index={2}>
         <InfoContainer>
            <SectionTitle>Projects</SectionTitle>
            <Underline />
            <Info>
               <div className="min-w-max">
                  <div>I love Details, Technology,</div>
                  <div>and Animation</div>
               </div>
            </Info>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronImage src={projectsImg} alt="contact-form-background" />
            <div className="w-full h-full absolute top-0 left-0 flex flex-col">
               <div ref={constrainRef} className="flex-1 w-full relative group">
                  <ProjectsContainer
                     selectedPagination={selectedPagination}
                     showCarousel={showCarousel}
                     constrainRef={constrainRef}
                  >
                     {projectsArray.map((project) => (
                        <Project
                           key={project}
                           id={`${project}`}
                           project={project}
                           showCarousel={showCarousel}
                           setSelectedId={setSelectedId}
                           selectedPagination={selectedPagination}
                        />
                     ))}
                  </ProjectsContainer>
                  <CarouselNavigation
                     reveal={selectedPagination !== 1 && showCarousel}
                     onClick={() =>
                        setSelectedPagination(selectedPagination - 1)
                     }
                  />
                  <CarouselNavigation
                     forward
                     reveal={selectedPagination !== length && showCarousel}
                     onClick={() =>
                        setSelectedPagination(selectedPagination + 1)
                     }
                  />

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

               <div className="w-full py-3 flex space-x-5 justify-center border-t-2 border-white">
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
         </JumbotronContainer>
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
