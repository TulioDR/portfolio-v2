import { motion } from "framer-motion";
type Props = {
   showGrid: Boolean;
   id: string;
   setSelectedId: any;
};

export default function Project({ showGrid, id, setSelectedId }: Props) {
   return (
      <motion.article
         layout
         layoutId={id}
         onClick={() => setSelectedId(id)}
         className={`aspect-16/9 bg-orange-900 ${
            showGrid ? "h-full min-w-max" : "w-full min-w-full"
         }`}
      ></motion.article>
   );
}
