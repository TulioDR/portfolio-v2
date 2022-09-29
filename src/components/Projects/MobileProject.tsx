import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
   saveValues: any;
   project: any;
};

export default function MobileProject({ saveValues, project }: Props) {
   const [showTitle, setShowTitle] = useState<boolean>(true);

   const execute = () => {
      saveValues(project.img, project.link);
      setShowTitle(false);
   };
   return (
      <div className="w-full h-full relative cursor-pointer" onClick={execute}>
         <Image
            src={project.img}
            alt="landscape"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            priority
         />
         <motion.div
            animate={{
               y: showTitle ? 0 : "100%",
               transition: { duration: 0.5 },
            }}
            className="absolute w-full bottom-0 left-0 pb-3 pl-4 pt-10 text-2xl font-semibold bg-gradient-to-t from-primaryDark to-transparent"
         >
            {project.name}
         </motion.div>
      </div>
   );
}
