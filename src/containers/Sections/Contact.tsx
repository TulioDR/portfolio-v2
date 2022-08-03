import { motion } from "framer-motion";

import contactImg from "../../assets/images/contact.jpg";

import SectionContainer from "../../components/Sections/SectionContainer";
import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

import InfoContainer from "../../components/Sections/InfoContainer";
import JumbotronContainer from "../../components/Sections/JumbotronContainer";
import JumbotronImage from "../../components/Sections/JumbotronImage";
import Info from "../../components/Sections/Info";
import Input from "../../components/Contact/Input";

import { Form, Formik } from "formik";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SentMessage from "../../components/Contact/SentMessage";

const initialState = {
   name: "",
   email: "",
   message: "",
};

type Errors = {
   name?: string;
   email?: string;
   message?: {
      message1: string;
      message2: string;
   };
};
export default function Contact() {
   const [isNameOnFocus, setIsNameOnFocus] = useState<boolean>(false);
   const [isEmailOnFocus, setIsEmailOnFocus] = useState<boolean>(false);
   const [isMessageOnFocus, setIsMessageOnFocus] = useState<boolean>(false);
   const [sentSuccessfull, setSentSuccessfull] = useState<boolean>(false);
   const [sentFailure, setSentFailure] = useState<boolean>(false);

   const form = useRef<HTMLFormElement>(null);

   const checkName = (name: string): boolean => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
   };
   const checkEmail = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };

   const onSubmit = (values: any, { resetForm }: any) => {
      console.log(values);
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            form.current!,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
         )
         .then(
            (result) => {
               console.log(result);
               resetForm();
               setIsNameOnFocus(false);
               setIsEmailOnFocus(false);
               setIsMessageOnFocus(false);
               setSentSuccessfull(true);
               setTimeout(() => setSentSuccessfull(false), 4000);
            },
            (error) => {
               console.log(error);
               setSentFailure(true);
               setTimeout(() => setSentFailure(false), 4000);
            }
         );
   };

   const validation = (value: any) => {
      let errors: Errors = {};

      if (!value.name) errors.name = "You haven't told me your name yet.";
      else if (!checkName(value.name))
         errors.name = "That name is pretty weird";

      if (!value.email) errors.email = "You forgot your email.";
      else if (!checkEmail(value.email))
         errors.email = "Are you sure that's your email?";

      if (!value.message)
         errors.message = {
            message1: "I can't read minds yet...",
            message2: "so a message would be nice.",
         };

      return errors;
   };

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
            <JumbotronImage src={contactImg} alt="contact-form-background" />
            <div className="w-full h-full absolute top-0 left-0 grid place-content-center text-xs md:text-sm 2xl:text-base">
               <Formik
                  initialValues={initialState}
                  validate={validation}
                  onSubmit={onSubmit}
               >
                  {({ handleBlur, errors, touched }) => (
                     <Form
                        ref={form}
                        className="flex flex-col lg:w-72 xl:w-80 2xl:w-96 space-y-5 mx-auto"
                     >
                        <Input
                           name="name"
                           label="Name"
                           icon="person"
                           placeholder="What's your name?"
                           errors={errors}
                           touched={touched}
                           handleBlur={handleBlur}
                           textarea={false}
                           isOnFocus={isNameOnFocus}
                           setIsOnFocus={setIsNameOnFocus}
                        />
                        <Input
                           name="email"
                           label="Email"
                           icon="email"
                           placeholder="Where should I contact you?"
                           errors={errors}
                           touched={touched}
                           handleBlur={handleBlur}
                           textarea={false}
                           isOnFocus={isEmailOnFocus}
                           setIsOnFocus={setIsEmailOnFocus}
                        />
                        <Input
                           name="message"
                           label="Message"
                           icon="forum"
                           placeholder="What do you want to talk about?"
                           errors={errors}
                           touched={touched}
                           handleBlur={handleBlur}
                           textarea={true}
                           isOnFocus={isMessageOnFocus}
                           setIsOnFocus={setIsMessageOnFocus}
                        />
                        <motion.button
                           type="submit"
                           whileTap={{ scale: 0.94 }}
                           className="py-3 px-8 text-white bg-secondary w-min drop-shadow-lg flex items-center space-x-3"
                        >
                           <span className="material-icons">send</span>
                           <span>Send</span>
                        </motion.button>
                     </Form>
                  )}
               </Formik>
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
