import { motion } from "framer-motion";
type Props = {
   showCarousel: Boolean;
   id: string;
   setSelectedId: any;
   selectedPagination: number;
   project: number;
};

// Do something with selected Pagination
export default function Project({ showCarousel, id, setSelectedId }: Props) {
   return (
      <motion.article
         layout
         layoutId={id}
         className={`aspect-16/9 bg-orange-800 drop-shadow-md ${
            showCarousel ? "w-full min-w-full" : "h-full"
         }`}
         transition={{ duration: 0.5, delay: showCarousel ? 0 : 0.2 }}
      ></motion.article>
   );
}
