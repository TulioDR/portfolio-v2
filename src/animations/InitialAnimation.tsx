import { motion } from "framer-motion";

type Props = {};

export default function InitialAnimation({}: Props) {
   return (
      <motion.div
         className="fixed top-0 left-0 bg-primary w-full h-screen z-20"
         initial={{ y: 0 }}
         animate={{ y: "-100%" }}
         transition={{ duration: 0.7, delay: 1, ease: "easeIn" }}
      ></motion.div>
   );
}
