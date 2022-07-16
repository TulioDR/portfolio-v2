import React from "react";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";

type Props = {};

export default function Projects({}: Props) {
   return (
      <SectionContainer index={2}>
         <div className="flex h-full">
            <div className="flex flex-col space-y-10 justify-center w-2/5">
               <SectionTitle>Projects</SectionTitle>
               <Underline />
               <div className="text-3xl">
                  <div>I love Animation, Technology,</div>
                  <div>and Design</div>
               </div>
            </div>
            <div className="grid grid-cols-2 gap-5 w-3/5 overflow-y-scroll pr-5">
               <article className="aspect-16/9 w-full bg-blue-500"></article>
               <article className="aspect-16/9 w-full bg-orange-500"></article>
               <article className="aspect-16/9 w-full bg-blue-500"></article>
               <article className="aspect-16/9 w-full bg-orange-500"></article>
               <article className="aspect-16/9 w-full bg-blue-500"></article>
               <article className="aspect-16/9 w-full bg-orange-500"></article>
               <article className="aspect-16/9 w-full bg-blue-500"></article>
               <article className="aspect-16/9 w-full bg-orange-500"></article>
               <article className="aspect-16/9 w-full bg-blue-500"></article>
               <article className="aspect-16/9 w-full bg-orange-500"></article>
            </div>
         </div>
      </SectionContainer>
   );
}
