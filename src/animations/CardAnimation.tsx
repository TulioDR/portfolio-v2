import { motion } from "framer-motion";

export default function CardAnimation() {
   return (
      <motion.div
         initial={{ x: 0 }}
         animate={{ x: "100%" }}
         transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
         className="absolute bg-slate-800 top-0 left-0 w-full h-full"
      >
         <motion.div
            initial={{ width: 0 }}
            animate={{ width: "50%" }}
            transition={{
               duration: 0.7,
               delay: 0.4,
               ease: "easeInOut",
            }}
            className="bg-orange-700 top-0 left-0 w-full h-full"
         ></motion.div>
      </motion.div>
   );
}
