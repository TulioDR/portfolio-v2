import { motion } from "framer-motion";
type Props = {
   showGrid: Boolean;
};

export default function Project({ showGrid }: Props) {
   return (
      <motion.article
         layout
         className={`aspect-16/9 bg-orange-900 ${
            showGrid ? "h-full min-w-max" : "w-full min-w-full"
         }`}
      ></motion.article>
   );
}
