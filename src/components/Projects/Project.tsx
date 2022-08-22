import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
   showCarousel: Boolean;
   setSelectedId?: any;
   selectedPagination: number;
   project: any;
};

// Do something with selected Pagination
export default function Project({ project, showCarousel }: Props) {
   return (
      <motion.article
         layout
         className={`aspect-16/9 bg-orange-800 drop-shadow-md group ${
            showCarousel ? "w-full min-w-full" : "h-full"
         }`}
         transition={{ duration: 0.5, delay: showCarousel ? 0 : 0.2 }}
      >
         <Image
            alt="example"
            src={project.img}
            layout="fill"
            className="group-hover:scale-110  duration-500"
         />
         <div className="absolute top-0 left-0 w-full h-full flex space-x-10 items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 duration-200 overflow-hidden">
            <a
               target="_blank"
               href={project.repository}
               className="rounded-full bg-secondary h-20 w-20 2xl:h-28 2xl:w-28 grid place-content-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-200"
            >
               <span className="w-min text-center text-sm leading-tight">
                  View Code
               </span>
            </a>
            <a
               target="_blank"
               href={project.website}
               className="rounded-full bg-secondary h-20 w-20 2xl:h-28 2xl:w-28 grid place-content-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-200"
            >
               <span className="w-min text-center text-sm leading-tight">
                  Visit Site
               </span>
            </a>
         </div>
      </motion.article>
   );
}
