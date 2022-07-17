import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   mainSkills?: Boolean;
   showMainSkills: Boolean;
};

export default function SkillsGrid({
   children,
   mainSkills,
   showMainSkills,
}: Props) {
   return (
      <motion.div
         animate={{ x: showMainSkills ? 0 : mainSkills ? "-100%" : "100%" }}
         transition={{ duration: 0.6 }}
         className={`grid grid-cols-4 gap-3 w-full ${
            mainSkills ? "" : "absolute top-0"
         }`}
      >
         {children}
      </motion.div>
   );
}
