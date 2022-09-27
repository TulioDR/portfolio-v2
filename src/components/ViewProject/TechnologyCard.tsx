import { motion } from "framer-motion";

type Props = {};

export default function TechnologyCard({}: Props) {
   const getInfo = () => {
      console.log("get info");
   };

   return (
      <motion.div
         whileHover={{ scale: 1.1 }}
         whileTap={{ scale: 1 }}
         onTap={getInfo}
         className="w-full h-24 cursor-pointer bg-white rounded-xl shadow-lg p-2 flex flex-col justify-center"
      ></motion.div>
   );
}
