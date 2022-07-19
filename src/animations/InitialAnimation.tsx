import { motion } from "framer-motion";

type Props = {};

export default function InitialAnimation({}: Props) {
   return (
      <motion.div
         className="fixed top-0 left-0 bg-zinc-900 w-full h-screen z-50"
         initial={{ y: 0 }}
         animate={{ y: "-100%" }}
         transition={{
            duration: 0.9,
            ease: [0.645, 0.045, 0.355, 1],
         }}
      ></motion.div>
   );
}
