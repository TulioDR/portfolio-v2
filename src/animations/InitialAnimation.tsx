import { motion } from "framer-motion";
import Image from "next/image";

import eagle from "../assets/images/logo/eagle.svg";

type Props = {};

export default function InitialAnimation({}: Props) {
   return (
      <motion.div
         className="fixed top-0 left-0 bg-gradient-to-t from-orange-800 to-orange-900 w-full h-screen z-50 flex items-center justify-center"
         initial={{ y: 0 }}
         animate={{ y: "-100%" }}
         transition={{
            duration: 0.5,
            delay: 0.2,
            ease: "easeIn",
         }}
      >
         <div className="relative h-60 w-full">
            <Image src={eagle} alt="holy eagle" layout="fill" priority />
         </div>
      </motion.div>
   );
}
