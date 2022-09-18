import { motion } from "framer-motion";
import { infoAnimation } from "../../animations/InfoAnimation";

type Props = {
   children: any;
};

export default function SectionTitle({ children }: Props) {
   return (
      <motion.h1
         variants={infoAnimation}
         className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl min-w-max tracking-wide"
      >
         {children}
      </motion.h1>
   );
}
