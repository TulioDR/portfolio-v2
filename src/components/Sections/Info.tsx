import { motion } from "framer-motion";
import Tag from "../Others/Tag";

type Props = {
   children: React.ReactNode;
   about?: boolean;
};

export default function Info({ children, about }: Props) {
   const sectionInfo = {
      initial: { x: "-100%" },
      animate: {
         x: 0,
         transition: { duration: 0.5, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.div
         variants={sectionInfo}
         className={`text-sm sm:text-base md:text-lg lg:text-3xl font-light ${
            about ? "" : "min-w-max"
         }`}
      >
         <Tag>p</Tag>
         <div className="translate-x-5">{children}</div>
         <Tag closing>p</Tag>
      </motion.div>
   );
}
