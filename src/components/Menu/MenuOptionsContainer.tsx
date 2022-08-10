import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function MenuOptionsContainer({ children }: Props) {
   const container = {
      hidden: { opacity: 1 },
      visible: {
         transition: {
            delayChildren: 0.35,
            staggerChildren: 0.05,
         },
      },
   };

   return (
      <motion.ul
         variants={container}
         initial="hidden"
         animate="visible"
         className="text-5xl font-extrabold tracking-wide"
      >
         {children}
      </motion.ul>
   );
}
