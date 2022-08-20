import { useEffect, useRef, useState } from "react";
import usePositionContext from "../../context/PositionContext";
import CarouselNavigation from "./CarouselNavigation";
import CarouselPagination from "./CarouselPagination";
import CarouselPaginationContainer from "./CarouselPaginationContainer";
import ChangeViewBtn from "./ChangeViewBtn";
import Project from "./Project";
import ProjectsContainer from "./ProjectsContainer";

type Props = {};
const projectsArray = [1, 2, 3, 4, 5, 6, 7, 8];
const { length } = projectsArray;
export default function ProjectsShowcase({}: Props) {
   const { currentIndex } = usePositionContext();
   const constrainRef = useRef(null);
   const [showCarousel, setShowCarousel] = useState(true);
   const [selectedPagination, setSelectedPagination] = useState(1);

   useEffect(() => {
      setTimeout(() => {
         setShowCarousel(true);
      }, 1000);
   }, [currentIndex]);

   return (
      <>
         <div ref={constrainRef} className="flex-1 w-full relative">
            {/* <div ref={constrainRef} className="flex-1 w-full relative group"> */}
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
                     selectedPagination={selectedPagination}
                  />
               ))}
            </ProjectsContainer>
            <CarouselNavigation
               reveal={selectedPagination !== 1 && showCarousel}
               onClick={() => setSelectedPagination(selectedPagination - 1)}
            />
            <CarouselNavigation
               forward
               reveal={selectedPagination !== length && showCarousel}
               onClick={() => setSelectedPagination(selectedPagination + 1)}
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
      </>
   );
}
