import { Field } from "formik";
import ErrorMessage from "./ErrorMessage";
import BorderBottom from "./BorderBottom";
import ErrorMessageMobile from "./ErrorMessageMobile";

type Props = {
   placeholder: string;
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
      <div className="w-full relative">
         <ErrorMessage errors={errors} touched={touched} name={name} />
         <div className="w-full relative overflow-hidden">
            <Field
               as={textarea ? "textarea" : "input"}
               name={name}
               onFocus={() => setIsOnFocus(true)}
               onBlur={onBlur}
               placeholder={placeholder}
               autoComplete="off"
               className={`bg-gray-100 w-full px-4 py-3 text-primary placeholder:text-gray-600 focus:outline-none
                     ${
                        textarea
                           ? "h-28 outline-none resize-none duration-500"
                           : "h-12"
                     }
                  `}
            />
            <BorderBottom isOnFocus={isOnFocus} />
         </div>
         <ErrorMessageMobile errors={errors} touched={touched} name={name} />
      </div>
   );
}
