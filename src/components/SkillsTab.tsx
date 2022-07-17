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
         className={`pb-2 relative cursor-pointer duration-300 ${
            showMainSkills === isMainSkill ? "text-white" : "text-gray-400"
         }`}
         onClick={onClick}
      >
         {children}
         {showMainSkills === isMainSkill && (
            <motion.div
               layoutId="underline"
               className="w-full bg-orange-600 absolute"
               initial={{ bottom: -1, height: 5 }}
               transition={{ duration: 0.6 }}
            />
         )}
      </motion.div>
   );
}
