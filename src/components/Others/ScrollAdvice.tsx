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
            duration: 0.5,
            delay: currentIndex === 0 ? 0.3 : 0,
            ease: "easeOut",
         }}
         className="fixed bottom-0 left-10 z-10 flex flex-col items-center justify-center space-y-4"
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
