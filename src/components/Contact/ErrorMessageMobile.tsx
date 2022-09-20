type Props = { name: string; errors: any; touched: any };

export default function ErrorMessageMobile({ errors, touched, name }: Props) {
   return (
      touched[name] &&
      errors[name] && (
         <div className="text-red-600 sm:hidden mt-2">
            {errors[name].message2 ? (
               <>
                  <div>{errors[name].message1}</div>
                  <div>{errors[name].message2}</div>
               </>
            ) : (
               <div>{errors[name]}</div>
            )}
         </div>
      )
   );
}
