import { motion } from "framer-motion";

type Props = {};

export default function InitialAnimation({}: Props) {
   return (
      <>
         <motion.div
            layout
            className="bg-green-900 w-full h-screen absolute top-0 z-50"
            initial={{ y: 0 }}
            // animate={{ y: "-100%" }}
            transition={{ duration: 0.7, delay: 1, ease: "easeIn" }}
         ></motion.div>
      </>
   );
}
