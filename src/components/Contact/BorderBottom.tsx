import { AnimatePresence, motion } from "framer-motion";

type Props = {
   isOnFocus: boolean;
};

export default function BorderBottom({ isOnFocus }: Props) {
   return (
      <AnimatePresence>
         {isOnFocus && (
            <motion.div
               initial={{ x: "-100%", height: 3 }}
               animate={{ x: 0 }}
               exit={{ x: "100%" }}
               transition={{ duration: 0.3 }}
               className="w-full bg-secondary absolute bottom-0"
            ></motion.div>
         )}
      </AnimatePresence>
   );
}
