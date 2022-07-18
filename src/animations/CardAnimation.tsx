import { motion } from "framer-motion";

export default function CardAnimation() {
   return (
      <motion.div
         initial={{ x: 0 }}
         animate={{ x: "100%" }}
         transition={{
            duration: 0.7,
            delay: 0.5,
            ease: [0.645, 0.045, 0.355, 1],
         }}
         className="bg-slate-900 absolute top-0 bottom-0 left-0 w-full h-full"
      >
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{
               duration: 0.7,
               delay: 0.4,
               ease: [0.645, 0.045, 0.355, 1],
            }}
            className="bg-orange-600 w-full h-full"
         ></motion.div>
      </motion.div>
   );
}
