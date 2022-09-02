import contactImg from "../../assets/images/contact.jpg";

import SectionContainer from "../../components/Sections/SectionContainer";

import InfoContainer from "../../components/Sections/InfoContainer";

import Info from "../../components/Sections/Info";

import { useState } from "react";
import SentMessage from "../../components/Contact/SentMessage";
import ContactForm from "../../components/Contact/ContactForm";
import useLanguageContext from "../../context/LanguageContext";
import TagContainer from "../../components/Sections/TagContainer";

import { SwiperSlide } from "swiper/react";
import Jumbotron from "../Parts/Jumbotron";
import SlideNextBtn from "../../components/Sections/SlideNextBtn";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";
import SwiperSlideInner from "../../components/Sections/SwiperSlideInner";
import ContactLink from "../../components/Contact/ContactLink";
import Title from "../Parts/Title";
import MobileJumbotronContainer from "../Parts/MobileJumbotronContainer";
export default function Contact() {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const { currentIdiom } = useLanguageContext();
   const { title } = currentIdiom.contact;

   return (
      <SectionContainer index={3}>
         <SwiperSlide>
            <SwiperSlideInner>
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
                  <SlideNextBtn text="Contact Me" />
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
            </SwiperSlideInner>
         </SwiperSlide>
         <SwiperSlide className="sm:hidden">
            {({ isActive }) => (
               <MobileJumbotronContainer isActive={isActive}>
                  <SwiperSlideInner mobile>
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
                     <SlidePrevBtn />
                  </SwiperSlideInner>
               </MobileJumbotronContainer>
            )}
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
