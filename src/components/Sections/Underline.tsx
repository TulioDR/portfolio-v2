import { motion } from "framer-motion";
import { infoAnimation } from "../../animations/InfoAnimation";

type Props = {};

export default function Underline({}: Props) {
   return (
      <motion.div variants={infoAnimation} className="w-28 md:w-36">
         <div className="space-y-3 md:space-y-5">
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
         </div>
      </motion.div>
   );
}
