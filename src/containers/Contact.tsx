import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
// import { motion } from "framer-motion";
import Underline from "../components/Underline";
import Image from "next/image";
import contactImg from "../assets/images/contact.jpg";
import CardAnimation from "../animations/CardAnimation";
import DescriptionContainer from "../components/DescriptionContainer";

export default function Contact() {
   return (
      <SectionContainer index={3}>
         <DescriptionContainer>
            <SectionTitle>Get In Touch</SectionTitle>
            <Underline />
            <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min mb-8">
               tulioruzo29@gmail.com
            </div>
            <div className="text-3xl hover:text-gray-400 duration-300 cursor-pointer max-w-min">
               Github
            </div>
         </DescriptionContainer>
         <div className="w-3/5 bg-gray-200 relative overflow-hidden h-full shadow-2xl">
            <Image
               src={contactImg}
               alt="contact-form"
               layout="fill"
               className="object-cover"
            />
            <div className="w-full h-full bg-orange-800 bg-opacity-50 absolute top-0 left-0"></div>
            <CardAnimation />
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
         </div>
      </SectionContainer>
   );
}
