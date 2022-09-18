import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";
import Jumbotron from "../Parts/Jumbotron";
import projectsImg from "../../assets/images/projects.jpg";
type Props = {};

export default function ProjectsM({}: Props) {
   return (
      <>
         <Jumbotron imgSrc={projectsImg} imgAlt="contact-form-background">
            <MobileProjectsShowcase />
         </Jumbotron>
         <SlidePrevBtn />
      </>
   );
}
