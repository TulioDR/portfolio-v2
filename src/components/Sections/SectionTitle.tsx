import { motion } from "framer-motion";
import { infoAnimation } from "../../animations/InfoAnimation";

type Props = {
   children: any;
};

export default function SectionTitle({ children }: Props) {
   return (
      <motion.h1
         variants={infoAnimation}
         className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl min-w-max tracking-widest"
      >
         {children}
      </motion.h1>
   );
}
