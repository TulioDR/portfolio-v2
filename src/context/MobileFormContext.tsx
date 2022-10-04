import { createContext, useContext, useState } from "react";

interface AppContextInterface {
   revealMobileForm: boolean;
   toggleMobileReveal: () => void;
}

type Props = {
   children: React.ReactNode;
};

const MobileFormContext = createContext({} as AppContextInterface);
export default function useMobileFormContext() {
   return useContext(MobileFormContext);
}

export function MobileFormProvider({ children }: Props) {
   const [revealMobileForm, setRevealJumbotron] = useState<boolean>(false);
   const toggleMobileReveal = () => {
      setRevealJumbotron(!revealMobileForm);
   };
   const value: AppContextInterface = {
      revealMobileForm,
      toggleMobileReveal,
   };

   return (
      <MobileFormContext.Provider value={value}>
         {children}
      </MobileFormContext.Provider>
   );
}
