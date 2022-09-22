import React from "react";
import Project from "./Project";

type Props = { setValues: any };

export default function ProjectsShowcase({ setValues }: Props) {
   return (
      <div className="flex-1 w-full hidden sm:grid grid-cols-5 gap-4">
         <Project lg="col-span-3" setValues={setValues} />
         <Project lg="col-span-2 row-span-2" setValues={setValues} />
         <Project lg="col-span-3" setValues={setValues} />
      </div>
   );
}
