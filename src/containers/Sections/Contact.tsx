import contactImg from "../../assets/images/contact.jpg";

import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";

import Info from "../../components/Sections/Info";

import { useState } from "react";
import SentMessage from "../../components/Contact/SentMessage";
import ContactForm from "../../components/Contact/ContactForm";
import JumbotronBackgroundImage from "../../components/Sections/JumbotronBackgroundImage";

export default function Contact() {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   return (
      <SectionContainer index={3}>
         <InfoContainer>
            <SectionTitle>Get In Touch</SectionTitle>
            <Underline />
            <Info>
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  <a href="mailto:tulioruzo29@gmail.com">
                     tulioruzo29@gmail.com
                  </a>
               </div>
            </Info>
            <Info>
               <div className="hover:text-gray-400 duration-300 cursor-pointer max-w-min">
                  <a href="https://github.com/TulioDR" target="_blank">
                     Github
                  </a>
               </div>
            </Info>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronBackgroundImage
               src={contactImg}
               alt="contact-form-background"
            />
            <div className="w-full h-full absolute top-0 left-0 grid place-content-center text-xs md:text-sm 2xl:text-base">
               <ContactForm
                  setSentSuccessfull={setSentSuccessfull}
                  setSentFailure={setSentFailure}
               />
            </div>
         </JumbotronContainer>
         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
         <SentMessage open={sentFailure} setOpen={setSentFailure} />
      </SectionContainer>
   );
}
