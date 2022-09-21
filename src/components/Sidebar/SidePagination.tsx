import usePositionContext from "../../context/PositionContext";
import { motion } from "framer-motion";

type Props = {
   index: number;
   bulletRef: any;
};

export default function SidePagination({ index, bulletRef }: Props) {
   const { currentIndex } = usePositionContext();
   return (
      <li
         ref={bulletRef}
         className={`sidebar-pagination xl:h-1 w-1 cursor-pointer duration-500 ${
            currentIndex === index ? "h-10 xl:h-1 xl:w-10" : "xl:w-6 h-4"
         }`}
      >
         <motion.div
            initial={{ width: 0 }}
            animate={{
               width: "100%",
               transition: { duration: 0.6, delay: 0.5 },
            }}
            exit={{ width: 0, transition: { duration: 0.6 } }}
            className="bg-white h-full"
         ></motion.div>
      </li>
   );
}
