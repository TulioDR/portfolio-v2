import { motion } from "framer-motion";
type Props = {
   showCarousel: Boolean;
   id: string;
   setSelectedId: any;
   selectedPagination: number;
};

export default function Project({ showCarousel, id, setSelectedId }: Props) {
   return (
      <motion.article
         layout
         layoutId={id}
         onClick={() => setSelectedId(id)}
         className={`aspect-16/9 bg-orange-900 cursor-pointer ${
            showCarousel ? "w-full min-w-full" : "h-full min-w-max"
         }`}
         transition={{ duration: 0.5, delay: showCarousel ? 0 : 0.2 }}
      ></motion.article>
   );
}
