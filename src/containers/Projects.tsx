import React, { useState } from "react";
import CardContainer from "../components/CardContainer";
import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";
import Project from "../components/Project";
import CardInfo from "../components/CardInfo";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Projects({}: Props) {
   const [showGrid, setShowGrid] = useState(true);
   const [selectedId, setSelectedId] = useState<string | undefined>(undefined);

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
            <div className="h-full w-full flex flex-col">
               <div
                  className={`w-full flex-1 overflow-hidden bg-primary ${
                     showGrid
                        ? "grid grid-flow-col grid-rows-2 gap-5 pb-5"
                        : "flex space-x-10 items-center px-20"
                  }`}
               >
                  <Project
                     id={"1"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"2"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"3"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"4"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"5"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"6"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"7"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
                  <Project
                     id={"8"}
                     showGrid={showGrid}
                     setSelectedId={setSelectedId}
                  />
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
         <AnimatePresence>
            {selectedId && (
               <motion.div
                  layoutId={selectedId}
                  onClick={() => setSelectedId(undefined)}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="fixed top-0 left-0 w-full h-screen bg-orange-800 z-50"
               ></motion.div>
            )}
         </AnimatePresence>
      </SectionContainer>
   );
}
