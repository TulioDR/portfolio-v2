import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import SentMessage from "../../components/Contact/SentMessage";
import useMobileFormContext from "../../context/MobileFormContext";

type Props = {};

export default function MobileContactForm({}: Props) {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const { revealMobileForm, toggleMobileReveal } = useMobileFormContext();

   return (
      <AnimatePresence>
         {revealMobileForm && (
            <motion.div
               initial={{ y: "100%" }}
               animate={{ y: 0 }}
               exit={{ y: "100%" }}
               transition={{ duration: 0.5 }}
               className="bg-primary w-full h-screen fixed top-0 left-0 z-50 overflow-y-scroll"
            >
               <div className="relative pt-14" style={{ height: "150vh" }}>
                  <button
                     onClick={toggleMobileReveal}
                     className="rounded-full bg-secondary p-2 material-icons absolute top-5 right-5"
                  >
                     close
                  </button>
                  <ContactForm
                     setSentSuccessfull={setSentSuccessfull}
                     setSentFailure={setSentFailure}
                  />
                  <SentMessage
                     open={sentSuccessfull}
                     setOpen={setSentSuccessfull}
                     success
                  />
                  <SentMessage open={sentFailure} setOpen={setSentFailure} />
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
