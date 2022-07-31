import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   isMainSkill: Boolean;
   showMainSkills: Boolean;
   onClick: any;
};

export default function SkillsTab({
   children,
   isMainSkill,
   showMainSkills,
   onClick,
}: Props) {
   return (
      <motion.div
         className={`pb-1 relative cursor-pointer duration-300 ${
            showMainSkills === isMainSkill ? "text-white" : "text-gray-400"
         }`}
         onClick={onClick}
      >
         {children}
         {showMainSkills === isMainSkill && (
            <motion.div
               layoutId="underline"
               className="w-full bg-secondary absolute"
               initial={{ bottom: -1, height: 5 }}
               transition={{ duration: 0.7, ease: [0.645, 0.045, 0.355, 1] }}
            />
         )}
      </motion.div>
   );
}
