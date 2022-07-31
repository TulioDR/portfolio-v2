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
         animate={{
            x: showMainSkills
               ? 0
               : mainSkills
               ? "calc(-100% - 12px)"
               : "calc(100% + 12px)",
         }}
         transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
         className={`grid grid-cols-4 gap-3 w-full ${
            mainSkills ? "" : "absolute top-0"
         }`}
      >
         {children}
      </motion.div>
   );
}
