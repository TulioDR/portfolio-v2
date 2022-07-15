import { motion } from "framer-motion";

type Props = {};

export default function InitialAnimation({}: Props) {
   return (
      <>
         {/* <motion.div
            className="bg-orange-700 w-screen h-screen absolute top-0 z-50"
            animate={{ y: "-100%" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeIn" }}
         ></motion.div> */}
         <motion.div
            className="bg-slate-900 w-screen h-screen absolute top-0 z-50"
            animate={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeIn" }}
         ></motion.div>
      </>
   );
}
