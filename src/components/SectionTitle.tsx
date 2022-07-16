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
         className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl whitespace-nowrap z-10 tracking-widest"
      >
         {children}
      </motion.h1>
   );
}
