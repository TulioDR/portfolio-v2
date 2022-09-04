import { useState } from "react";
import contactImg from "../../assets/images/contact.jpg";
import ContactForm from "../../components/Contact/ContactForm";
import ContactLink from "../../components/Contact/ContactLink";
import SentMessage from "../../components/Contact/SentMessage";
import Info from "../../components/Sections/Info";
import InfoContainer from "../../components/Sections/InfoContainer";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import TagContainer from "../../components/Sections/TagContainer";
import useLanguageContext from "../../context/LanguageContext";
import Jumbotron from "../Parts/Jumbotron";
import Title from "../Parts/Title";

type Props = {};

export default function ContactD({}: Props) {
   const { currentIdiom } = useLanguageContext();
   const { title, contactMe } = currentIdiom.contact;
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);
   return (
      <>
         <InfoContainer>
            <Title>{title}</Title>
            <TagContainer tag="p">
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
            </TagContainer>
            <SlideNextBtn text={contactMe} />
         </InfoContainer>
         <div className="w-3/5 hidden sm:block">
            <Jumbotron
               tag="form"
               imgSrc={contactImg}
               imgAlt="contact-form-background"
            >
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
      </>
   );
}
