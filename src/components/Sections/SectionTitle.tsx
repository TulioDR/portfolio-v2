import { motion } from "framer-motion";
import Tag from "../Others/Tag";

type Props = {
   children: any;
};

export default function SectionTitle({ children }: Props) {
   const sectionInfo = {
      initial: { x: "-100%" },
      animate: {
         x: 0,
         transition: { duration: 0.8, ease: [0.645, 0.045, 0.355, 1] },
      },
   };
   return (
      <motion.h1
         variants={sectionInfo}
         className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl min-w-max"
      >
         <Tag>h2</Tag>
         <div className="translate-x-5 tracking-widest">{children}</div>
         <Tag closing>h2</Tag>
      </motion.h1>
   );
}
