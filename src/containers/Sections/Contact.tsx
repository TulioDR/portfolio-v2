import { motion } from "framer-motion";

import contactImg from "../../assets/images/contact.jpg";

import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";
import JumbotronImage from "../../components/Sections/JumbotronImage";
import Info from "../../components/Sections/Info";
import Input from "../../components/Contact/Input";
import MessageArea from "../../components/Contact/MessageArea";

type Props = {};
export default function Contact({}: Props) {
   return (
      <SectionContainer index={3}>
         <InfoContainer>
            <SectionTitle>Get In Touch</SectionTitle>
            <Underline />
            <Info>
               <div className="hover:text-gray-400 duration-300 cursor-pointer min-w-max">
                  tulioruzo29@gmail.com
               </div>
            </Info>
            <Info>
               <div className="hover:text-gray-400 duration-300 cursor-pointer min-w-max">
                  Github
               </div>
            </Info>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronImage src={contactImg} alt="contact-form-background" />
            <div className="px-16 lg:px-24 xl:px-32 2xl:px-40 space-y-5 w-full h-full absolute top-0 left-0 flex flex-col justify-center">
               <div className="flex space-x-5">
                  <Input placeholder="Name" />
                  <Input placeholder="Email" />
               </div>
               <MessageArea placeholder="Message" />
               <motion.button
                  whileTap={{ scale: 0.94 }}
                  className="py-3 w-full rounded-md text-white bg-orange-600"
               >
                  Send
               </motion.button>
            </div>
         </JumbotronContainer>
      </SectionContainer>
   );
}
