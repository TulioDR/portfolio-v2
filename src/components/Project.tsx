import { motion } from "framer-motion";

type Props = {
   showGrid: Boolean;
};

export default function Project({ showGrid }: Props) {
   return (
      <motion.article
         layout
         className={`aspect-16/9 bg-blue-600 block cursor-pointer ${
            showGrid ? "w-full" : "w-2/3 min-w-2/3"
         }`}
      ></motion.article>
   );
}
