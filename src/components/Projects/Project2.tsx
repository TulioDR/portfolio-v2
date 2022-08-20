import { motion } from "framer-motion";
import Image from "next/image";
import exampleImg from "../../assets/images/projects/example.jpg";

type Props = {
   showCarousel: Boolean;
   id: string;
   setSelectedId?: any;
   selectedPagination: number;
   project: number;
};

// Do something with selected Pagination
export default function Project({ showCarousel, id, setSelectedId }: Props) {
   return (
      <motion.article
         layout
         layoutId={id}
         className={`aspect-16/9 bg-orange-800 drop-shadow-md group ${
            showCarousel ? "w-full min-w-full" : "h-full"
         }`}
         transition={{ duration: 0.5, delay: showCarousel ? 0 : 0.2 }}
      >
         <Image
            alt="example"
            src={exampleImg}
            layout="fill"
            className="group-hover:scale-110  duration-500"
         />
         <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-0 hover:bg-opacity-50 duration-200 overflow-hidden">
            <button className="rounded-full bg-secondary h-20 w-20 2xl:h-28 2xl:w-28 grid place-content-center opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 duration-200">
               <span className="w-min text-center text-sm leading-tight">
                  View Project
               </span>
            </button>

            <div className="absolute bottom-0 right-0 flex space-x-3 text-black pb-3 pr-3 duration-200 translate-y-full group-hover:translate-y-0">
               <button className="bg-white py-1 rounded-md duration-300 truncate flex items-center w-10 hover:w-24">
                  <span className="material-icons min-w-max px-2 grid place-content-center">
                     code
                  </span>
                  <span>Code</span>
               </button>
               <button className="bg-white py-1 rounded-md duration-300 truncate flex items-center w-10 hover:w-20">
                  <span className="material-icons min-w-max px-2 grid place-content-center">
                     public
                  </span>
                  <span>Site</span>
               </button>
            </div>
         </div>
      </motion.article>
   );
}
