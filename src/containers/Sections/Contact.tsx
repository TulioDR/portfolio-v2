import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import ContactLink from "../../components/Contact/ContactLink";
import SentMessage from "../../components/Contact/SentMessage";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";

import useLanguageContext from "../../context/LanguageContext";

import Jumbotron from "../Parts/Jumbotron";
import Title from "../Parts/Title";

import RevealJumbotronBtn from "../../components/Sections/RevealJumbotronBtn";
import useMobileFormContext from "../../context/MobileFormContext";

import contactImg from "../../assets/images/contact6.jpg";

export default function Contact() {
   const { currentIdiom } = useLanguageContext();
   const { title, contactMe } = currentIdiom.contact;
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const { toggleMobileReveal } = useMobileFormContext();

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
            <RevealJumbotronBtn text={contactMe} onClick={toggleMobileReveal} />
         </InfoContainer>
         <Jumbotron imgSrc={contactImg} imgAlt="contact-form-background">
            <ContactForm
               setSentSuccessfull={setSentSuccessfull}
               setSentFailure={setSentFailure}
            />
         </Jumbotron>
         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
         <SentMessage open={sentFailure} setOpen={setSentFailure} />
      </SectionContainer>
   );
}
