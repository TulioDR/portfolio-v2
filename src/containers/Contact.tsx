import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

import Underline from "../components/Underline";
import contactImg from "../assets/images/contact.jpg";
import DescriptionContainer from "../components/DescriptionContainer";
import CardContainer from "../components/CardContainer";
import CardImage from "../components/CardImage";
import { motion } from "framer-motion";
import CardInfo from "../components/CardInfo";

type Props = {};
export default function Contact({}: Props) {
   return (
      <SectionContainer index={3}>
         <DescriptionContainer>
            <SectionTitle>Get In Touch</SectionTitle>
            <Underline />
            <CardInfo>
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  tulioruzo29@gmail.com
               </div>
            </CardInfo>
            <CardInfo>
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  Github
               </div>
            </CardInfo>
         </DescriptionContainer>
         <CardContainer>
            <CardImage src={contactImg} alt="contact-form-background" />
            <div className="px-16 lg:px-24 xl:px-32 2xl:px-40 space-y-5 w-full h-full absolute top-0 left-0 flex flex-col justify-center">
               <div className="flex space-x-5">
                  <input
                     type="text"
                     placeholder="Name"
                     className="w-1/2 rounded-md px-3 py-2 bg-primary"
                  />
                  <input
                     type="text"
                     placeholder="Email"
                     className="w-1/2 rounded-md px-3 py-2 bg-primary"
                  />
               </div>
               <textarea
                  placeholder="Message"
                  className="w-full rounded-md h-48 2xl:h-60 px-3 py-2 bg-primary"
               />
               <motion.button
                  whileTap={{ scale: 0.94 }}
                  className="py-3 w-full rounded-md text-white bg-orange-600"
               >
                  Send
               </motion.button>
            </div>
         </CardContainer>
      </SectionContainer>
   );
}
