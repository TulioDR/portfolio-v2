import CardAnimation from "../animations/CardAnimation";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";

export default function Contact() {
   return (
      <SectionContainer index={3}>
         <SectionTitle>Get In Touch</SectionTitle>
         <div className="flex pt-8">
            <div className="w-2/5">
               <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min mb-8">
                  tulioruzo29@gmail.com
               </div>
               <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  Github
               </div>
            </div>
            <motion.div
               initial={{ scale: 0.9, transformOrigin: "right" }}
               animate={{ scale: 1 }}
               transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeInOut",
               }}
               className="w-3/5 bg-gray-500 text-black relative overflow-hidden"
            >
               <CardAnimation />
               <div className="p-5 space-y-5">
                  <div className="flex space-x-5">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="w-1/2 rounded-md px-3 py-2"
                     />
                     <input
                        type="text"
                        placeholder="Your Email"
                        className="w-1/2 rounded-md px-3 py-2"
                     />
                  </div>
                  <input
                     type="text"
                     placeholder="Subject"
                     className="block w-full rounded-md px-3 py-2"
                  />
                  <textarea
                     placeholder="Your message"
                     className="w-full rounded-md px-3 py-2"
                  />
                  <button className="py-3 w-full rounded-md bg-slate-900 text-white">
                     Send
                  </button>
               </div>
            </motion.div>
         </div>
      </SectionContainer>
   );
}
