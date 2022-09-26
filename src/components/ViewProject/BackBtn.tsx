import { motion } from "framer-motion";
import Image from "next/image";
import arrowLeft from "../../assets/images/arrow-left.svg";
type Props = {
   onClick: any;
};

export default function BackBtn({ onClick }: Props) {
   return (
      <div className="fixed top-32 left-16 z-20 overflow-hidden w-16 h-9 translate-y-3">
         <motion.button
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { duration: 0.6 } }}
            exit={{ x: "-100%", transition: { duration: 0.6 } }}
            onClick={onClick}
            className="w-full h-full relative"
         >
            <Image src={arrowLeft} alt="back" layout="fill" />
         </motion.button>
      </div>
   );
}
