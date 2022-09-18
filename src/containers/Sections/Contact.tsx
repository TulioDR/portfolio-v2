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

   const [revealJumbotron, setRevealJumbotron] = useState<boolean>(false);
   const toggleJumbotron = () => setRevealJumbotron(!revealJumbotron);

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
            <SlideNextBtn text={contactMe} onClick={toggleJumbotron} />
         </InfoContainer>
         <Jumbotron
            reveal={revealJumbotron}
            toggle={toggleJumbotron}
            imgSrc={contactImg}
            imgAlt="contact-form-background"
         >
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
