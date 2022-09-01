import { motion } from "framer-motion";
import { infoAnimation } from "../../animations/InfoAnimation";

type Props = {
   children: React.ReactNode;
   about?: boolean;
};

export default function Info({ children, about }: Props) {
   return (
      <motion.div
         variants={infoAnimation}
         className={`text-base md:text-lg lg:text-3xl font-light ${
            about ? "" : "min-w-max"
         }`}
      >
         {children}
      </motion.div>
   );
}
