import { motion } from "framer-motion";
import { Form } from "formik";
import { useEffect } from "react";
import useLanguageContext from "../../context/LanguageContext";
import Input from "./Input";

type Props = {
   handleBlur: any;
   errors: any;
   touched: any;
   validateForm: any;
   formRef: any;
   isNameOnFocus: any;
   setIsNameOnFocus: any;
   isEmailOnFocus: any;
   setIsEmailOnFocus: any;
   isMessageOnFocus: any;
   setIsMessageOnFocus: any;
};

export default function FormInputs({
   handleBlur,
   errors,
   touched,
   validateForm,
   formRef,
   isNameOnFocus,
   setIsNameOnFocus,
   isEmailOnFocus,
   setIsEmailOnFocus,
   isMessageOnFocus,
   setIsMessageOnFocus,
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

   useEffect(() => {
      setTimeout(() => {
         validateForm();
      }, 0);
   }, [validateForm, isEnglish]);

   return (
      <Form
         ref={formRef}
         className="flex flex-col p-5 md:p-0 max-w-full w-full sm:w-72 xl:w-80 2xl:w-96 space-y-5 mx-auto text-xs md:text-sm 2xl:text-base"
      >
         <Input
            name="name"
            label={name}
            icon="person"
            placeholder={namePlaceholder}
            errors={errors}
            touched={touched}
            handleBlur={handleBlur}
            doubleError={true}
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
            doubleError={false}
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
            doubleError={true}
            textarea={true}
            isOnFocus={isMessageOnFocus}
            setIsOnFocus={setIsMessageOnFocus}
         />
         <motion.button
            type="submit"
            whileTap={{ scale: 0.94 }}
            className="py-2 md:py-3 px-6 md:px-8 text-white bg-secondary w-min drop-shadow-lg flex items-center space-x-3"
         >
            <span className="material-icons">send</span>
            <span>{send}</span>
         </motion.button>
      </Form>
   );
}
