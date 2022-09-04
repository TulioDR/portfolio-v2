import Jumbotron from "../Parts/Jumbotron";

import projectsImg from "../../assets/images/projects.jpg";
import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import InfoContainer from "../../components/Sections/InfoContainer";
import Title from "../Parts/Title";
import TagContainer from "../../components/Sections/TagContainer";
import Info from "../../components/Sections/Info";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import useLanguageContext from "../../context/LanguageContext";
type Props = {};

export default function ProjectsD({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title, subtitle1, subtitle2, checkMyProjects } =
      currentIdiom.projects;

   return (
      <>
         <InfoContainer>
            <Title>{title}</Title>
            <TagContainer tag="p">
               <Info>
                  <div className="min-w-max">
                     <div>{subtitle1}</div>
                     <div>{subtitle2}</div>
                  </div>
               </Info>
            </TagContainer>
            <SlideNextBtn text={checkMyProjects} />
         </InfoContainer>
         <div className="w-3/5 hidden sm:block">
            <Jumbotron
               tag="picture"
               imgSrc={projectsImg}
               imgAlt="contact-form-background"
            >
               <ProjectsShowcase />
            </Jumbotron>
         </div>
      </>
   );
}
