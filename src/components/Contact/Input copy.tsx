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
   doubleError: boolean;
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
   doubleError,
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
         <label className="flex items-center md:space-x-2 pr-4 max-w-min relative">
            <span className="material-icons w-6 text-lg md:text-2xl">
               {icon}
            </span>
            <span>{label}</span>
            <ErrorMessage
               errors={errors}
               touched={touched}
               name={name}
               doubleError={doubleError}
            />
         </label>
         <div className="pl-6 md:pl-8">
            <div className="w-full relative overflow-hidden">
               <Field
                  as={textarea ? "textarea" : "input"}
                  name={name}
                  onFocus={() => setIsOnFocus(true)}
                  onBlur={onBlur}
                  placeholder={placeholder}
                  autoComplete="off"
                  className={`w-full text-gray-100 placeholder:text-gray-300 focus:outline-none bg-transparent
                     ${
                        textarea
                           ? `mt-2 outline-none resize-none duration-500 ${
                                isOnFocus ? "h-24 delay-300" : "h-6"
                             }`
                           : ` my-2`
                     }
                  `}
               />
               <BorderBottom isOnFocus={isOnFocus} />
            </div>
         </div>
      </div>
   );
}
