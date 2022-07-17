import { useContext, createContext, useState, ReactNode } from "react";

interface AppContextInterface {
   currentIndex: number;
   setCurrentIndex: any;
}
const PositionContext = createContext({} as AppContextInterface);
export default function usePositionContext() {
   return useContext(PositionContext);
}
type Props = {
   children: ReactNode;
};

export function PositionProvider({ children }: Props) {
   const [currentIndex, setCurrentIndex] = useState<number>(0);

   const value = {
      currentIndex,
      setCurrentIndex,
   };

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
