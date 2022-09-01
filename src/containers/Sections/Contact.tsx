import contactImg from "../../assets/images/contact.jpg";

import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";

import Info from "../../components/Sections/Info";

import { useState } from "react";
import SentMessage from "../../components/Contact/SentMessage";
import ContactForm from "../../components/Contact/ContactForm";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";

import { SwiperSlide } from "swiper/react";
import Jumbotron from "../Parts/Jumbotron";
export default function Contact() {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.contact;

   return (
      <SectionContainer index={3}>
         <SwiperSlide className="flex">
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
            <div className="w-2/3 hidden sm:block">
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
         </SwiperSlide>
         <SwiperSlide className="w-full h-full flex justify-end">
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
         </SwiperSlide>

         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
         <SentMessage open={sentFailure} setOpen={setSentFailure} />
      </SectionContainer>
   );
}
