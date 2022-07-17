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
            <button
               onClick={() => setShowGrid(!showGrid)}
               className="material-icons text-6xl max-w-min"
            >
               view_carousel
            </button>
         </DescriptionContainer>
         <CardContainer>
            <div
               className={`h-full overflow-scroll cursor-grab ${
                  showGrid
                     ? "grid grid-cols-2 gap-5"
                     : "flex items-center space-x-5"
               }`}
            >
               <Project showGrid={showGrid} />
               <Project showGrid={showGrid} />
               <Project showGrid={showGrid} />
               <Project showGrid={showGrid} />
               <Project showGrid={showGrid} />
               <Project showGrid={showGrid} />
            </div>
         </CardContainer>
      </SectionContainer>
   );
}
