import { motion } from "framer-motion";

type Props = {};

export default function ViewCodeBtn({}: Props) {
   return (
      <motion.button
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
         exit={{ y: "100%", opacity: 0, transition: { duration: 0.6 } }}
         whileHover={{ width: 176, transition: { duration: 0.3 } }}
         className="rounded-lg bg-secondary absolute bottom-14 right-14 w-14 h-14 group flex justify-end overflow-hidden"
      >
         <div className="flex items-center h-full w-44">
            <span className="h-12 w-[7.5rem] grid place-content-center translate-x-2 text-lg">
               View Code
            </span>
            <span className="group-hover:rotate-180 duration-300 text-3xl material-icons w-14">
               code
            </span>
         </div>
      </motion.button>
   );
}
