import { useRouter } from "next/router";
import {
   useContext,
   createContext,
   useState,
   ReactNode,
   useEffect,
} from "react";

interface AppContextInterface {
   currentIndex: number | null;
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
   const [currentIndex, setCurrentIndex] = useState<number | null>(null);

   const { asPath } = useRouter();
   useEffect(() => {
      if (asPath === "/#home") setCurrentIndex(0);
      if (asPath === "/#about") setCurrentIndex(1);
      if (asPath === "/#projects") setCurrentIndex(2);
      if (asPath === "/#contact") setCurrentIndex(3);
   }, []);

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
