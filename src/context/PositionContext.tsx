import { useRouter } from "next/router";
import {
   useContext,
   createContext,
   useState,
   ReactNode,
   useEffect,
   useRef,
   RefObject,
} from "react";

interface AppContextInterface {
   currentIndex: number | null;
   setCurrentIndex: any;
   homeBullet: RefObject<HTMLButtonElement>;
   aboutBullet: RefObject<HTMLButtonElement>;
   projectsBullet: RefObject<HTMLButtonElement>;
   contactBullet: RefObject<HTMLButtonElement>;
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
      if (asPath === "/#about") setCurrentIndex(1);
      else if (asPath === "/#projects") setCurrentIndex(2);
      else if (asPath === "/#contact") setCurrentIndex(3);
      else setCurrentIndex(0);
   }, []);

   const homeBullet = useRef<HTMLButtonElement>(null);
   const aboutBullet = useRef<HTMLButtonElement>(null);
   const projectsBullet = useRef<HTMLButtonElement>(null);
   const contactBullet = useRef<HTMLButtonElement>(null);

   const value = {
      currentIndex,
      setCurrentIndex,
      homeBullet,
      aboutBullet,
      projectsBullet,
      contactBullet,
   };

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
