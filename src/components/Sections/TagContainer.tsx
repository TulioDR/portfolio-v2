import Tag from "./Tag";
import { motion } from "framer-motion";
import { tagContainerAnimation } from "../../animations/InfoAnimation";

type Props = {
   children: React.ReactNode;
   tag: string;
};

export default function TagContainer({ children, tag }: Props) {
   return (
      <motion.div variants={tagContainerAnimation}>
         <Tag>{tag}</Tag>
         <div className="space-y-2 sm:space-y-3 md:space-y-5 2xl:space-y-8 pl-5">
            {children}
         </div>
         <Tag closing>{tag}</Tag>
      </motion.div>
   );
}
