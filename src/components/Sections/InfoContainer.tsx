import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};
const infoContainerAnimation = {
   initial: { opacity: 1 },
   animate: {
      transition: {
         staggerChildren: 0.1,
      },
   },
};

export default function InfoContainer({ children }: Props) {
   return (
      <motion.div
         variants={infoContainerAnimation}
         className="w-full sm:w-1/2 flex flex-col justify-center z-20 sm:pr-3 md:pr-5 lg:pr-10 space-y-3 md:space-y-5 2xl:space-y-8"
      >
         {children}
      </motion.div>
   );
}
