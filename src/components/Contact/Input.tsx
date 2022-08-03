import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";

import BorderBottom from "./BorderBottom";

type Props = {
   placeholder: string;
   icon: string;
   label: string;
   name: string;
   handleBlur: any;
   errors: any;
   touched: any;
   textarea: boolean;
   isOnFocus: boolean;
   setIsOnFocus: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Input({
   placeholder,
   icon,
   label,
   name,
   handleBlur,
   errors,
   touched,
   textarea,
   isOnFocus,
   setIsOnFocus,
}: Props) {
   const onBlur = (e: any) => {
      handleBlur(e);
      const value = e.target.value;
      if (!value.length) setIsOnFocus(false);
   };

   return (
      <div className="w-full">
         <label className="flex items-center space-x-2 pr-4 max-w-min relative">
            <span className="material-icons w-6">{icon}</span>
            <span>{label}</span>
            <ErrorMessage
               errors={errors}
               touched={touched}
               name={name}
               textarea={textarea}
            />
         </label>
         <div className="pl-8">
            <div className="w-full relative overflow-hidden">
               <Field
                  as={textarea ? "textarea" : "input"}
                  name={name}
                  onFocus={() => setIsOnFocus(true)}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={
                     textarea
                        ? `w-full text-gray-300 mt-2 bg-transparent focus:outline-none outline-none resize-none duration-500 ${
                             isOnFocus ? "h-24 delay-300" : "h-6"
                          }`
                        : `w-full text-gray-300 my-2 bg-transparent focus:outline-none`
                  }
               />
               <BorderBottom isOnFocus={isOnFocus} />
            </div>
         </div>
      </div>
   );
}
