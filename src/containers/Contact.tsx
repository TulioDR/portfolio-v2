// import CardAnimation from "../animations/CardAnimation";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import { motion } from "framer-motion";
import Underline from "../components/Underline";
import Image from "next/image";
import contactImg from "../assets/images/contact.jpg";

export default function Contact() {
   return (
      <SectionContainer index={3}>
         <div className="flex h-full">
            <div className="w-2/5 space-y-10 flex flex-col justify-center">
               <SectionTitle>Get In Touch</SectionTitle>
               <Underline />
               <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min mb-8">
                  tulioruzo29@gmail.com
               </div>
               <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  Github
               </div>
            </div>
            <div className="w-3/5 bg-gray-200 relative overflow-hidden h-full shadow-2xl">
               <Image
                  src={contactImg}
                  alt="contact-form"
                  layout="fill"
                  className="object-cover"
               />
               <div className="w-full h-full bg-orange-800 bg-opacity-50 absolute top-0 left-0"></div>
               <div className="px-40 space-y-5 w-full h-full absolute top-0 left-0 flex flex-col justify-center">
                  <div className="flex space-x-5">
                     <input
                        type="text"
                        placeholder="Your Name"
                        className="w-1/2 rounded-md px-3 py-2 bg-slate-900"
                     />
                     <input
                        type="text"
                        placeholder="Your Email"
                        className="w-1/2 rounded-md px-3 py-2 bg-slate-900"
                     />
                  </div>
                  <input
                     type="text"
                     placeholder="Subject"
                     className="block w-full rounded-md px-3 py-2 bg-slate-900"
                  />
                  <textarea
                     placeholder="Your message"
                     className="w-full rounded-md h-48 2xl:h-60 px-3 py-2 bg-slate-900"
                  />
                  <button className="py-3 w-full rounded-md text-white bg-orange-600">
                     Send
                  </button>
               </div>
               <motion.div
                  initial={{ x: 0 }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 0.7, delay: 0.5, ease: "easeInOut" }}
                  className="bg-slate-800 absolute top-0 left-0 w-full h-full z-50"
               >
                  <motion.div
                     initial={{ width: 0 }}
                     animate={{ width: "50%" }}
                     transition={{
                        duration: 0.7,
                        delay: 0.4,
                        ease: "easeInOut",
                     }}
                     className="bg-orange-600 top-0 left-0 w-full h-full"
                  ></motion.div>
               </motion.div>
            </div>
         </div>
      </SectionContainer>
   );
}
