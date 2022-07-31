import { motion } from "framer-motion";
import usePositionContext from "../../context/PositionContext";

type Props = {};

export default function ScrollAdvice({}: Props) {
   const { currentIndex } = usePositionContext();
   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={{ y: currentIndex === 0 ? 0 : "100%" }}
         transition={{
            duration: 0.4,
            delay: currentIndex === 0 ? 0.3 : 0,
            ease: "easeOut",
         }}
         className="fixed bottom-0 left-10 z-10 flex flex-col items-center justify-center space-y-4"
      >
         <div className="border-2 border-white rounded-2xl w-7 h-11 flex justify-center">
            <div className="w-1 h-3 mt-3 bg-white rounded-full animate-bounce"></div>
         </div>
         <span className="h-16 w-1 bg-white"></span>
      </motion.div>
   );
}
