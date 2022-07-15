import { motion } from "framer-motion";

type Props = {
   children: any;
};

export default function SectionTitle({ children }: Props) {
   return (
      <motion.h1
         initial={{ x: "-100%" }}
         animate={{ x: 0 }}
         transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeInOut",
         }}
         className="text-5xl sm:text-7xl md:text-8xl font-medium mt-10"
      >
         {children}
      </motion.h1>
   );
}
