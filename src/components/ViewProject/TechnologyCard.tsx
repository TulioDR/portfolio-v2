import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type Props = {
   technology: {
      name: string;
      img: StaticImageData;
      link: string;
   };
};

export default function TechnologyCard({ technology }: Props) {
   const getInfo = () => {
      setTimeout(() => {
         window.open(technology.link, "_blank");
      }, 200);
   };

   return (
      <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1 }}
         onTap={getInfo}
         className="w-full h-24 cursor-pointer bg-white rounded-xl shadow-lg pt-1 px-3 flex flex-col justify-center items-center relative"
      >
         <div className="h-10 relative w-full">
            <Image
               src={technology.img}
               alt={technology.name}
               layout="fill"
               objectFit="contain"
            />
         </div>
         <span className="text-xs sm:text-sm">{technology.name}</span>
      </motion.div>
   );
}
