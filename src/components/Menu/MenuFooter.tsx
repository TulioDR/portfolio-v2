import { motion } from "framer-motion";

export default function MenuFooter() {
   return (
      <motion.div
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{
            duration: 0.4,
            delay: 0.5,
         }}
         className="absolute bottom-8 flex items-center text-gray-400 text-sm"
      >
         <span className="material-icons mx-1">copyright</span>
         <span>2022 Tulio Ruzo. Made with</span>
         <span className="material-icons mx-1">favorite</span>
         <span>in Carabobo, Venezuela.</span>
      </motion.div>
   );
}
