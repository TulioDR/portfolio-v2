import Project from "./Project";
import { projectsList } from "../../assets/constants/projects";

type Props = {};

export default function ProjectsShowcase({}: Props) {
   return (
      <div className="flex-1 w-full hidden sm:grid grid-cols-5 gap-4">
         <Project layout="col-span-3 row-span-1" project={projectsList[0]} />
         <Project layout="col-span-2 row-span-2" project={projectsList[1]} />
         <Project layout="col-span-3 row-span-1" project={projectsList[2]} />
      </div>
   );
}
