import useRouteContext from "../../context/RouteContext";
import Project from "./Project";
import { projectsList } from "../../assets/constants/projects";

type Props = {};

export default function ProjectsShowcase({}: Props) {
   const {
      project1,
      project2,
      project3,
      showTitle1,
      showTitle2,
      showTitle3,
      setShowTitle1,
      setShowTitle2,
      setShowTitle3,
   } = useRouteContext();

   return (
      <div className="flex-1 w-full hidden sm:grid grid-cols-5 gap-4">
         <Project
            showTitle={showTitle1}
            setShowTitle={setShowTitle1}
            projectRef={project1}
            layout="col-span-3 row-span-1"
            project={projectsList[0]}
         />
         <Project
            showTitle={showTitle2}
            setShowTitle={setShowTitle2}
            projectRef={project2}
            layout="col-span-2 row-span-2"
            project={projectsList[1]}
         />
         <Project
            showTitle={showTitle3}
            setShowTitle={setShowTitle3}
            projectRef={project3}
            layout="col-span-3 row-span-1"
            project={projectsList[2]}
         />
      </div>
   );
}
