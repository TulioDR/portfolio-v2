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
         className="space-y-5 2xl:space-y-8 w-2/5 flex flex-col justify-center z-10 pr-10"
      >
         {children}
      </motion.div>
   );
}
