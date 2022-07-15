import React from "react";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

type Props = {};

export default function Projects({}: Props) {
   return (
      <SectionContainer index={2}>
         <SectionTitle>Projects</SectionTitle>
         <div className="grid grid-cols-2 gap-x-5">
            <article className="aspect-16/9 w-full bg-blue-500"></article>
            <article className="aspect-16/9 w-full bg-orange-500"></article>
         </div>
      </SectionContainer>
   );
}
