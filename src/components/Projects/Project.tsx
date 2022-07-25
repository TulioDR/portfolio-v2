import { motion } from "framer-motion";
type Props = {
   showCarousel: Boolean;
   id: string;
   setSelectedId: any;
};

export default function Project({ showCarousel, id, setSelectedId }: Props) {
   return (
      <motion.article
         layout
         layoutId={id}
         onClick={() => setSelectedId(id)}
         className={`aspect-16/9 bg-orange-900 ${
            showCarousel ? "w-full min-w-full" : "h-full min-w-max"
         }`}
      ></motion.article>
   );
}
