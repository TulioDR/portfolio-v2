import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function InfoContainer({ children }: Props) {
   const infoContainer = {
      initial: { opacity: 1 },
      animate: {
         transition: {
            delayChildren: 0.4,
            staggerChildren: 0.2,
         },
      },
   };

   return (
      <motion.div
         variants={infoContainer}
         initial="initial"
         animate="animate"
         className="space-y-2 sm:space-y-3 md:space-y-5 2xl:space-y-8 w-full sm:w-2/5 flex flex-col justify-center z-20 sm:pr-10"
      >
         {children}
      </motion.div>
   );
}
