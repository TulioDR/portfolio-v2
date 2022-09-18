import ContactForm from "../../components/Contact/ContactForm";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";
import Jumbotron from "../Parts/Jumbotron";
import contactImg from "../../assets/images/contact.jpg";
import { useState } from "react";
import SentMessage from "../../components/Contact/SentMessage";

type Props = {};

export default function ContactM({}: Props) {
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);
   return (
      <>
         <Jumbotron imgSrc={contactImg} imgAlt="contact-form-background">
            <ContactForm
               setSentSuccessfull={setSentSuccessfull}
               setSentFailure={setSentFailure}
            />
         </Jumbotron>
         <SlidePrevBtn />
         <SentMessage
            open={sentSuccessfull}
            setOpen={setSentSuccessfull}
            success
         />
         <SentMessage open={sentFailure} setOpen={setSentFailure} />
      </>
   );
}
