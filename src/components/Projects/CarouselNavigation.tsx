import { AnimatePresence, motion } from "framer-motion";

type Props = {
   forward?: boolean;
   onClick: any;
   reveal: boolean;
};

export default function CarouselNavigation({
   forward,
   reveal,
   onClick,
}: Props) {
   return (
      <AnimatePresence>
         {reveal && (
            <div
               className={`absolute h-full top-0 flex items-center opacity-0 group-one-hover:opacity-100 duration-300 ${
                  forward
                     ? "right-0 group-one-hover:right-4"
                     : "left-0 group-one-hover:left-4"
               }`}
            >
               <motion.button
                  initial={{ x: forward ? "100%" : "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: forward ? "100%" : "-100%", opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={onClick}
                  className="material-icons rounded-full w-12 h-12 bg-white text-black shadow-md bg-opacity-50 hover:bg-opacity-100"
               >
                  {forward ? "chevron_right" : "chevron_left"}
               </motion.button>
            </div>
         )}
      </AnimatePresence>
   );
}
