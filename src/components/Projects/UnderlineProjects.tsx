import { motion } from "framer-motion";
import { infoAnimation } from "../../animations/InfoAnimation";

type Props = {};

export default function UnderlineProjects({}: Props) {
   return (
      <div className="w-28 md:w-36">
         <div className="space-y-3 md:space-y-5">
            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "66.666667%" }}
               transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.645, 0.045, 0.355, 1],
               }}
               className="bg-secondary h-1 rounded-sm"
            ></motion.div>

            <motion.div
               initial={{ width: 0 }}
               animate={{ width: "66.666667%" }}
               transition={{
                  duration: 0.6,
                  delay: 0.5,
                  ease: [0.645, 0.045, 0.355, 1],
               }}
               className="bg-secondary h-1 rounded-sm origin-left ml-[33.33%]"
            ></motion.div>
         </div>
      </div>
   );
}
