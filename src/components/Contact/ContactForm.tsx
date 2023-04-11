import { Formik } from "formik";

import { useRef, useState } from "react";
import useLanguageContext from "../../context/LanguageContext";
import FormInputs from "./FormInputs";

type Props = {
   setSentMessage: React.Dispatch<React.SetStateAction<boolean>>;
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

export default function ContactForm({ setSentMessage }: Props) {
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

   const onSubmit = (values: any) => {
      console.log(values);
      setSentMessage(true);
      console.log("submit this");
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
               formRef={form}
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
