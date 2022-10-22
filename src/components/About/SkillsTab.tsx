import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isMain: boolean;
   main?: boolean;
   onClick: any;
};

export default function SkillsTab({ children, isMain, main, onClick }: Props) {
   return (
      <motion.li
         className={`pb-1 relative text-xs sm:text-sm md:text-base 2xl:text-lg cursor-pointer duration-500 ${
            main === isMain ? "text-white" : "text-gray-400"
         }`}
         onClick={onClick}
      >
         {children}
         {main === isMain && (
            <motion.div
               layoutId="underline"
               className="w-full bg-secondary absolute"
               initial={{ bottom: -1, height: 5 }}
               transition={{ duration: 0.3, ease: [0.645, 0.045, 0.355, 1] }}
            />
         )}
      </motion.li>
   );
}
