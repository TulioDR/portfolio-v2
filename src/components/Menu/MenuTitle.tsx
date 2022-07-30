import { motion } from "framer-motion";

export default function MenuTitle() {
   return (
      <motion.h5
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.4, delay: 0.3 }}
         className="text-center text-sm text-gray-400 uppercase mb-5 tracking-widest"
      >
         Menu
      </motion.h5>
   );
}
