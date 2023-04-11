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
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.5 }}
               className={
                  "fixed max-w-[66.66%] z-50 bottom-20 sm:bottom-0 left-20 pb-16"
               }
            >
               <div
                  className={`px-5 py-4 rounded-lg flex items-center space-x-2 ${
                     success ? "bg-green-800" : "bg-red-700"
                  }`}
               >
                  <div>
                     <div className="space-x-2">
                        <span>
                           This Portfolio is not been used at this moment, to
                           contact me use my gmail above or use the contact form
                           in the new portfolio at:
                        </span>
                     </div>
                     <a
                        className="hover:underline"
                        href="https://tulioruzo.vercel.app/"
                        target="_blank"
                     >
                        https://tulioruzo.vercel.app/
                     </a>
                  </div>

                  <span
                     onClick={() => setOpen(false)}
                     className="material-icons !text-4xl cursor-pointer"
                  >
                     close
                  </span>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
