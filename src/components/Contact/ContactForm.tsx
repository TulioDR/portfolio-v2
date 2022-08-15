import { Form, Formik } from "formik";
import Input from "./Input";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useLanguageContext from "../../context/LanguageContext";

type Props = {
   setSentSuccessfull: React.Dispatch<React.SetStateAction<boolean>>;
   setSentFailure: React.Dispatch<React.SetStateAction<boolean>>;
};

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

export default function ContactForm({
   setSentSuccessfull,
   setSentFailure,
}: Props) {
   const { currentIdiom, isEnglish } = useLanguageContext();

   const {
      name,
      email,
      message,
      namePlaceholder,
      emailPlaceholder,
      messagePlaceholder,
      send,
   } = currentIdiom.contact;

   const [isNameOnFocus, setIsNameOnFocus] = useState<boolean>(false);
   const [isEmailOnFocus, setIsEmailOnFocus] = useState<boolean>(false);
   const [isMessageOnFocus, setIsMessageOnFocus] = useState<boolean>(false);
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
               // setTimeout(() => setSentFailure(false), 4000);
            }
         );
   };

   const validation = (value: any) => {
      const { formErrors } = currentIdiom.contact;
      let errors: Errors = {};

      if (!value.name) errors.name = formErrors.noName;
      else if (!checkName(value.name)) errors.name = formErrors.invalidName;

      if (!value.email) errors.email = formErrors.noEmail;
      else if (!checkEmail(value.email)) errors.email = formErrors.invalidEmail;

      if (!value.message)
         errors.message = {
            message1: formErrors.noMessage1,
            message2: formErrors.noMessage2,
         };

      return errors;
   };

   return (
      <Formik
         initialValues={initialState}
         validate={validation}
         onSubmit={onSubmit}
      >
         {({ handleBlur, errors, touched, validateForm }) => {
            useEffect(() => {
               setTimeout(() => {
                  validateForm();
               }, 0);
            }, [isEnglish]);

            return (
               <Form
                  ref={form}
                  className="flex flex-col p-5 sm:p-10 md:p-0 max-w-full w-72 xl:w-80 2xl:w-96 space-y-5 mx-auto text-xs md:text-sm 2xl:text-base"
               >
                  <Input
                     name="name"
                     label={name}
                     icon="person"
                     placeholder={namePlaceholder}
                     errors={errors}
                     touched={touched}
                     handleBlur={handleBlur}
                     textarea={false}
                     isOnFocus={isNameOnFocus}
                     setIsOnFocus={setIsNameOnFocus}
                  />
                  <Input
                     name="email"
                     label={email}
                     icon="email"
                     placeholder={emailPlaceholder}
                     errors={errors}
                     touched={touched}
                     handleBlur={handleBlur}
                     textarea={false}
                     isOnFocus={isEmailOnFocus}
                     setIsOnFocus={setIsEmailOnFocus}
                  />
                  <Input
                     name="message"
                     label={message}
                     icon="forum"
                     placeholder={messagePlaceholder}
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
                     <span>{send}</span>
                  </motion.button>
               </Form>
            );
         }}
      </Formik>
   );
}
