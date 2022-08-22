import { AnimatePresence, motion } from "framer-motion";

type Props = {
   pagination: number;
   selectedPagination: number;
   setSelectedPagination: any;
};

export default function CarouselPagination({
   pagination,
   selectedPagination,
   setSelectedPagination,
}: Props) {
   return (
      <div className="flex items-center">
         <button
            onClick={() => setSelectedPagination(pagination)}
            className="mr-3 text-sm"
         >
            0{pagination}
         </button>
         <AnimatePresence>
            {selectedPagination === pagination && (
               <motion.div
                  initial={{ width: 0, height: 2 }}
                  animate={{ width: 60 }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white"
               ></motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
