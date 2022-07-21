import { motion } from "framer-motion";

type Props = {
   currentIndex: Number;
};

export default function ScrollAdvice({ currentIndex }: Props) {
   return (
      <motion.div
         animate={{ y: currentIndex === 0 ? 0 : "100%" }}
         transition={{ duration: 0.5, ease: "easeOut" }}
         className="fixed bottom-0 left-10 z-20 flex flex-col items-center justify-center space-y-4"
      >
         <p
            className="uppercase text-sm text-white tracking-wider"
            style={{ writingMode: "vertical-rl" }}
         >
            Scroll Down
         </p>
         <span className="h-16 w-1 bg-white"></span>
      </motion.div>
   );
}
