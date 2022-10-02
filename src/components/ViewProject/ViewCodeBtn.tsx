import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
};

export default function ViewCodeBtn({ children }: Props) {
   return (
      <motion.button
         initial={{ y: "100%", opacity: 0 }}
         animate={{ y: 0, opacity: 1, transition: { duration: 0.6 } }}
         exit={{ y: "100%", opacity: 0, transition: { duration: 0.6 } }}
         whileHover={{ width: 176, transition: { duration: 0.3 } }}
         className="rounded-lg bg-secondary absolute bottom-5 right-5 sm:bottom-10 sm:right-10 md:right-16 md:bottom-16 lg:bottom-20 lg:right-20 xl:right-16 xl:bottom-16 w-14 h-14 group flex justify-end overflow-hidden"
      >
         <div className="flex items-center h-full w-44">
            <span className="h-12 w-[7.5rem] grid place-content-center translate-x-2 text-lg">
               {children}
            </span>
            <span className="group-hover:rotate-180 duration-300 text-3xl material-icons w-14">
               code
            </span>
         </div>
      </motion.button>
   );
}
