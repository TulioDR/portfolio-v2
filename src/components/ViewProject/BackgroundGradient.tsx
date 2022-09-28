import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

const infoContainerAnimation = {
   initial: {
      background:
         "linear-gradient(90deg, rgba(20,23,25,0) 0%, rgba(0,0,0,0) 100%)",
   },
   animate: {
      background:
         "linear-gradient(90deg, rgba(20,23,25,0.98) 0%, rgba(0,0,0,0) 100%)",
      transition: {
         duration: 0.5,
         staggerChildren: 0.1,
      },
   },
   exit: {
      background:
         "linear-gradient(90deg, rgba(20,23,25,0) 0%, rgba(0,0,0,0) 100%)",
      transition: {
         duration: 0.5,
         staggerChildren: 0.1,
         staggerDirection: -1,
      },
   },
};

export default function BackgroundGradient({ children }: Props) {
   return (
      <motion.div
         variants={infoContainerAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         className="h-full pl-44 space-y-5 flex flex-col justify-center w-full"
      >
         {children}
      </motion.div>
   );
}
