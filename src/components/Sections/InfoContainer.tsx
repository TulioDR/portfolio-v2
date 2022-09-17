import { motion } from "framer-motion";
import { infoContainerAnimation } from "../../animations/InfoAnimation";

type Props = {
   children: React.ReactNode;
};

export default function InfoContainer({ children }: Props) {
   return (
      <motion.div
         variants={infoContainerAnimation}
         initial="initial"
         animate="animate"
         className="w-full sm:w-2/5 flex flex-col justify-center z-20 md:pr-5 lg:pr-10 space-y-3 md:space-y-5 2xl:space-y-8"
      >
         {children}
      </motion.div>
   );
}
