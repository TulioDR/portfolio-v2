import { useState } from "react";
import ContactForm from "../../components/Contact/ContactForm";
import ContactLink from "../../components/Contact/ContactLink";
import SentMessage from "../../components/Contact/SentMessage";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SectionContainer from "../../components/Sections/SectionContainer";
import useLanguageContext from "../../context/LanguageContext";
import Jumbotron from "../Parts/Jumbotron";
import useMobileFormContext from "../../context/MobileFormContext";
import contactImg from "../../assets/images/jumbotron/contact.jpg";
import Underline from "../../components/Sections/Underline";
import RevealToRight from "../../animations/RevealToRight";
import Title from "../../components/Main/Title";
import MainButton from "../../components/Main/MainButton";

export default function Contact() {
   const { currentIdiom } = useLanguageContext();
   const { title, contactMe } = currentIdiom.contact;
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);

   const { toggleMobileReveal } = useMobileFormContext();

   return (
      <SectionContainer>
         <InfoContainer>
            <RevealToRight>
               <Title>{title}</Title>
            </RevealToRight>
            <RevealToRight>
               <Underline />
            </RevealToRight>
            <RevealToRight>
               <Info>
                  <ContactLink href="mailto:tulioruzo29@gmail.com">
                     tulioruzo29@gmail.com
                  </ContactLink>
               </Info>
            </RevealToRight>
            <RevealToRight>
               <Info>
                  <ContactLink href="https://github.com/TulioDR">
                     Github
                  </ContactLink>
               </Info>
            </RevealToRight>
            <MainButton mobile onClick={toggleMobileReveal}>
               {contactMe}
            </MainButton>
         </InfoContainer>
         <Jumbotron imgSrc={contactImg} imgAlt="contact-form-background">
            <ContactForm setSentSuccessfull={setSentSuccessfull} />
         </Jumbotron>
         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
      </SectionContainer>
   );
}
