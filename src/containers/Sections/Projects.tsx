import SectionContainer from "../../components/Sections/SectionContainer";
import ProjectsM from "../Mobile/ProjectsM";
import ProjectsD from "../Desktop/ProjectsD";

type Props = {};

export default function Projects({}: Props) {
   return (
      <SectionContainer
         desktop={<ProjectsD />}
         mobile={<ProjectsM />}
         index={2}
      />
   );
}
