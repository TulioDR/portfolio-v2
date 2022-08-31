import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";
import Info from "../../components/Sections/Info";

import projectsImg from "../../assets/images/projects.jpg";

import JumbotronBackgroundImage from "../../components/Sections/JumbotronBackgroundImage";
import JumbotronInnerContainer from "../../components/Sections/JumbotronInnerContainer";
import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import MobileProjectsShowcase from "../../components/Projects/MobileProjectsShowcase";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";

type Props = {};

export default function Projects({}: Props) {
   const { currentIdiom } = useLanguageContext();

   const { title, subtitle1, subtitle2 } = currentIdiom.projects;
   return (
      <SectionContainer index={2}>
         <InfoContainer>
            <TagContainer tag="h2">
               <SectionTitle>{title}</SectionTitle>
               <Underline />
            </TagContainer>
            <TagContainer tag="p">
               <Info>
                  <div className="min-w-max">
                     <div>{subtitle1}</div>
                     <div>{subtitle2}</div>
                  </div>
               </Info>
            </TagContainer>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronBackgroundImage
               src={projectsImg}
               alt="contact-form-background"
            />
            <JumbotronInnerContainer>
               <div className="w-full h-full lg:hidden flex flex-col justify-center space-y-5">
                  <MobileProjectsShowcase />
               </div>
               <div className="w-full h-full hidden lg:flex flex-col">
                  <ProjectsShowcase />
               </div>
            </JumbotronInnerContainer>
         </JumbotronContainer>
      </SectionContainer>
   );
}
