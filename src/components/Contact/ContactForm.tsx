import { Formik } from "formik";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useLanguageContext from "../../context/LanguageContext";
import FormInputs from "./FormInputs";

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
   name?: {
      message1: string;
      message2: string;
   };
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
   const { currentIdiom } = useLanguageContext();

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
            }
         );
   };

   const validation = (value: any) => {
      const { formErrors } = currentIdiom.contact;
      let errors: Errors = {};

      if (!value.name)
         errors.name = {
            message1: formErrors.noName1,
            message2: formErrors.noName2,
         };
      else if (!checkName(value.name))
         errors.name = {
            message1: formErrors.invalidName1,
            message2: formErrors.invalidName2,
         };

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
         {({ handleBlur, errors, touched, validateForm }) => (
            <FormInputs
               handleBlur={handleBlur}
               errors={errors}
               touched={touched}
               validateForm={validateForm}
               ref={form}
               isNameOnFocus={isNameOnFocus}
               setIsNameOnFocus={setIsNameOnFocus}
               isEmailOnFocus={isEmailOnFocus}
               setIsEmailOnFocus={setIsEmailOnFocus}
               isMessageOnFocus={isMessageOnFocus}
               setIsMessageOnFocus={setIsMessageOnFocus}
            />
         )}
      </Formik>
   );
}
