import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function BackgroundGradient({ children }: Props) {
   return (
      <motion.div
         initial={{
            background:
               "linear-gradient(90deg, rgba(20,23,25,0) 0%, rgba(0,0,0,0) 100%)",
         }}
         animate={{
            background:
               "linear-gradient(90deg, rgba(20,23,25,0.9) 0%, rgba(0,0,0,0.45) 100%)",
         }}
         exit={{
            background:
               "linear-gradient(90deg, rgba(20,23,25,0) 0%, rgba(0,0,0,0) 100%)",
         }}
         transition={{ duration: 0.6 }}
         className="h-full pl-44 pr-60 space-y-5 flex flex-col justify-center"
      >
         {children}
      </motion.div>
   );
}
