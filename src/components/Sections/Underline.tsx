import { motion } from "framer-motion";

type Props = {};

export default function Underline({}: Props) {
   const sectionInfo = {
      initial: { x: "-100%" },
      animate: {
         x: 0,
         transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] },
      },
   };

   return (
      <motion.div variants={sectionInfo} className="space-y-5 w-36">
         <div className="bg-secondary w-2/3 h-1 rounded-sm"></div>
         <div className="flex justify-end">
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               transition={{
                  duration: 0.8,
                  delay: 0.6,
                  ease: [0.645, 0.045, 0.355, 1],
               }}
               className="bg-secondary w-2/3 h-1 rounded-sm "
            ></motion.div>
         </div>
      </motion.div>
   );
}
