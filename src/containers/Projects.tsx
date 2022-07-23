import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
import Project from "../components/Project";

type Props = {
   currentIndex: number;
};

export default function Projects({ currentIndex }: Props) {
   const [showGrid, setShowGrid] = useState(true);

   return (
      <SectionContainer currentIndex={currentIndex} index={2}>
         <DescriptionContainer>
            <SectionTitle>Projects</SectionTitle>
            <Underline />
            <div className="text-3xl">
               <div>I love Animation, Technology,</div>
               <div>and Design</div>
            </div>
         </DescriptionContainer>
         <CardContainer>
            <div className="h-full w-full flex flex-col">
               <div
                  className={`w-full flex-1 overflow-x-auto bg-primary ${
                     showGrid
                        ? "grid grid-flow-col grid-rows-2 gap-5"
                        : "flex space-x-10 items-center px-20"
                  }`}
               >
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
                  <Project showGrid={showGrid} />
               </div>
               <div className="w-full py-3 flex space-x-5 justify-center bg-primary border-t-2 border-white">
                  <button
                     onClick={() => setShowGrid(true)}
                     className="material-icons text-5xl"
                  >
                     view_module
                  </button>
                  <button
                     onClick={() => setShowGrid(false)}
                     className="material-icons text-5xl"
                  >
                     view_carousel
                  </button>
               </div>
            </div>
         </CardContainer>
      </SectionContainer>
   );
}
