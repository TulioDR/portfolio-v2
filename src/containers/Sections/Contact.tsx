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
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  tulioruzo29@gmail.com
               </div>
            </Info>
            <Info>
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  Github
               </div>
            </Info>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronImage src={contactImg} alt="contact-form-background" />
            <div className="w-full h-full absolute top-0 left-0 grid place-content-center text-xs md:text-sm lg:text-base">
               <div className="flex flex-col xl:w-80 2xl:w-96 space-y-5 mx-auto">
                  <Input
                     type="Name"
                     icon="person"
                     placeholder="What's your name?"
                  />
                  <Input
                     type="Email"
                     icon="email"
                     placeholder="Where should I contact you?"
                  />
                  <MessageArea
                     icon="forum"
                     type="Message"
                     placeholder="What do you want to talk about?"
                  />
                  <motion.button
                     whileTap={{ scale: 0.94 }}
                     className="py-3 px-8 text-white bg-secondary w-min drop-shadow-lg flex items-center space-x-3"
                  >
                     <span className="material-icons">send</span>
                     <span>Send</span>
                  </motion.button>
               </div>
            </div>
         </JumbotronContainer>
      </SectionContainer>
   );
}
