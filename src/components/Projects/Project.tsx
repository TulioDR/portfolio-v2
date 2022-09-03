import { motion } from "framer-motion";
import Image from "next/image";
import useLanguageContext from "../../context/LanguageContext";

type Props = {
   showCarousel: Boolean;
   setSelectedId?: any;
   selectedPagination: number;
   project: any;
};

export default function Project({ project, showCarousel }: Props) {
   const { currentIdiom } = useLanguageContext();
   const { viewCode, visitSite } = currentIdiom.projects;

   return (
      <motion.article
         layout
         className={`aspect-16/9 drop-shadow-md group-two ${
            showCarousel ? "w-full min-w-full" : "h-full"
         }`}
         transition={{ duration: 0.5, delay: showCarousel ? 0 : 0.2 }}
      >
         <div className="h-full w-full absolute top-0 left-0">
            <Image
               alt="example"
               src={project.img}
               layout="fill"
               className="group-two-hover:scale-110 duration-500 object-cover h-full w-full"
            />
         </div>

         <div className="absolute top-0 left-0 w-full h-full flex space-x-10 items-center justify-center bg-black bg-opacity-50 hover:bg-opacity-20 duration-200 overflow-hidden">
            <a
               target="_blank"
               href={project.repository}
               className="rounded-full bg-secondary h-20 w-20 2xl:h-28 2xl:w-28 grid place-content-center opacity-0 group-two-hover:opacity-100 scale-0 group-two-hover:scale-100 duration-200"
            >
               <span className="w-min text-center text-sm leading-tight">
                  {viewCode}
               </span>
            </a>
            <a
               target="_blank"
               href={project.website}
               className="rounded-full bg-secondary h-20 w-20 2xl:h-28 2xl:w-28 grid place-content-center opacity-0 group-two-hover:opacity-100 scale-0 group-two-hover:scale-100 duration-200"
            >
               <span className="w-min text-center text-sm leading-tight">
                  {visitSite}
               </span>
            </a>
         </div>
      </motion.article>
   );
}
