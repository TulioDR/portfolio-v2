import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import ContactLink from "../../components/Contact/ContactLink";
import SentMessage from "../../components/Contact/SentMessage";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import useLanguageContext from "../../context/LanguageContext";

import Jumbotron from "../Parts/Jumbotron";
import Title from "../Parts/Title";

import contactImg from "../../assets/images/contact.jpg";

export default function Contact() {
   const { currentIdiom } = useLanguageContext();
   const { title, contactMe } = currentIdiom.contact;
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);
   return (
      <SectionContainer index={3}>
         <InfoContainer>
            <Title>{title}</Title>

            <Info>
               <ContactLink href="mailto:tulioruzo29@gmail.com">
                  tulioruzo29@gmail.com
               </ContactLink>
            </Info>
            <Info>
               <ContactLink href="https://github.com/TulioDR">
                  Github
               </ContactLink>
            </Info>
            <SlideNextBtn text={contactMe} />
         </InfoContainer>
         <div className="w-1/2 hidden sm:block">
            <Jumbotron imgSrc={contactImg} imgAlt="contact-form-background">
               <ContactForm
                  setSentSuccessfull={setSentSuccessfull}
                  setSentFailure={setSentFailure}
               />
            </Jumbotron>
         </div>
         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
         <SentMessage open={sentFailure} setOpen={setSentFailure} />
      </SectionContainer>
   );
}
