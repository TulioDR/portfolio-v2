import Jumbotron from "../Parts/Jumbotron";

import projectsImg from "../../assets/images/projects.jpg";
import ProjectsShowcase from "../../components/Projects/ProjectsShowcase";
import InfoContainer from "../../components/Sections/InfoContainer";
import Title from "../Parts/Title";
import TagContainer from "../../components/Sections/TagContainer";
import Info from "../../components/Sections/Info";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import useLanguageContext from "../../context/LanguageContext";
import { motion } from "framer-motion";
import NewProject from "../../components/Projects/NewProject";
import Underline from "../../components/Sections/Underline";
import Tag from "../../components/Sections/Tag";

type Props = {};

export default function ProjectsD({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title, subtitle1, subtitle2, checkMyProjects } =
      currentIdiom.projects;

   return (
      <>
         <div className="h-full w-full flex flex-col space-y-4">
            <div className="overflow-hidden">
               <div className="pl-5 flex 2xl:flex-col items-center 2xl:items-start space-x-5">
                  <motion.div
                     initial={{ y: "100%" }}
                     animate={{ y: 0 }}
                     transition={{ duration: 0.4, delay: 0.4 }}
                     className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
                  >
                     {title}
                  </motion.div>
                  <Underline />
               </div>
            </div>
            <div className="flex-1 w-full grid grid-cols-4 gap-4 pl-5 py-1">
               <NewProject lg />
               <NewProject />
               <NewProject />
               <NewProject />
               <NewProject />
               <NewProject lg />
            </div>
         </div>
      </>
   );
}
