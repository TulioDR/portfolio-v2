import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   tabRef: any;
   index: number;
   currentSkills: number;
};

export default function SkillsTab({
   children,
   tabRef,
   index,
   currentSkills,
}: Props) {
   return (
      <motion.li
         ref={tabRef}
         className={`swiper-pagination-bullet pb-1 relative text-sm md:text-base lg:text-lg cursor-pointer duration-300 ${
            index === currentSkills ? "text-white" : "text-gray-400"
         }`}
      >
         {children}
         {index === currentSkills && (
            <motion.div
               layoutId="underline"
               className="w-full bg-secondary absolute"
               initial={{ bottom: -1, height: 5 }}
               transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}
            />
         )}
      </motion.li>
   );
}
