import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function CardInfo({ children }: Props) {
   const sectionInfo = {
      initial: { x: "-100%" },
      animate: {
         x: 0,
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.div variants={sectionInfo} className="text-3xl">
         {children}
      </motion.div>
   );
}
