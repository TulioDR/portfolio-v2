import { AnimatePresence, motion } from "framer-motion";

type Props = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   success?: boolean;
};

export default function SentMessage({ open, setOpen, success }: Props) {
   return (
      <AnimatePresence>
         {open && (
            <motion.div
               initial={{ y: "200%" }}
               animate={{ y: 0 }}
               exit={{ y: "200%" }}
               transition={{ duration: 0.5 }}
               className={`rounded-md fixed bottom-20 sm:bottom-7 left-7 px-5 py-4 flex items-center space-x-2 ${
                  success ? "bg-green-700" : "bg-red-700"
               }`}
            >
               <span>
                  {success
                     ? "Email sent Successfully!"
                     : "Something went wrong, try again or contact me directly"}
               </span>
               <span
                  onClick={() => setOpen(false)}
                  className="material-icons text-xl cursor-pointer"
               >
                  close
               </span>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
