import { motion } from "framer-motion";

type Props = {
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   success?: boolean;
};

export default function SentMessage({ setOpen, success }: Props) {
   return (
      <motion.div
         initial={{ y: "100%" }}
         animate={{ y: 0 }}
         exit={{ y: "100%" }}
         transition={{ duration: 0.5 }}
         className="fixed bottom-20 sm:bottom-0 left-5 md:left-20 pb-16 z-50"
      >
         <div
            className={`px-5 py-4 rounded-lg flex items-center space-x-2 text-xs sm:text-sm md:text-base ${
               success ? "bg-green-800" : "bg-red-700"
            }`}
         >
            <div>
               <div className="">
                  <div>This Portfolio is not been used at this moment,</div>
                  <div>to contact me use my gmail above,</div>
                  <div> or use the contact form in the new portfolio at:</div>
               </div>
               <a
                  className="hover:underline"
                  href="https://tulioruzo.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
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
   );
}
