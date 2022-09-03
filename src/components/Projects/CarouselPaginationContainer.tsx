import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   showCarousel: boolean;
};

export default function CarouselPaginationContainer({
   children,
   showCarousel,
}: Props) {
   return (
      <motion.div
         animate={{
            opacity: showCarousel ? 1 : 0,
            y: showCarousel ? "0" : "100%",
         }}
         transition={{ duration: 0.2, delay: showCarousel ? 0.5 : 0 }}
         className={`flex justify-center items-center space-x-3 absolute bottom-4 2xl:bottom-20 w-full ${
            showCarousel ? "" : "pointer-events-none"
         }`}
      >
         {children}
      </motion.div>
   );
}
