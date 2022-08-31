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
import JumbotronInnerContainer from "../../components/Sections/JumbotronInnerContainer";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";

export default function Contact() {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.contact;

   return (
      <SectionContainer index={3}>
         <InfoContainer>
            <TagContainer tag="h2">
               <SectionTitle>{title}</SectionTitle>
               <Underline />
            </TagContainer>
            <TagContainer tag="p">
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
            </TagContainer>
         </InfoContainer>
         <JumbotronContainer>
            <JumbotronBackgroundImage
               src={contactImg}
               alt="contact-form-background"
            />
            <JumbotronInnerContainer>
               <ContactForm
                  setSentSuccessfull={setSentSuccessfull}
                  setSentFailure={setSentFailure}
               />
            </JumbotronInnerContainer>
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
