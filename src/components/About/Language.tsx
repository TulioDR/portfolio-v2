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
         <Image
            src={`/skills/${skill.img}`}
            alt={skill.name}
            width={50}
            height={50}
            className="object-contain"
         />
         <div className="text-sm text-white">{skill.name}</div>
      </motion.article>
   );
}
