import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
   skill: any;
};

export default function Language({ skill }: Props) {
   return (
      <motion.article
         whileTap={{ scale: 0.94 }}
         className="flex flex-col items-center rounded-md cursor-pointer"
      >
         <div className="relative h-8 w-8 md:h-12 md:w-12">
            <Image
               src={`/skills/${skill.img}`}
               alt={skill.name}
               layout="fill"
               className="object-contain"
            />
         </div>

         <div className="text-xs md:text-sm text-white">{skill.name}</div>
      </motion.article>
   );
}
