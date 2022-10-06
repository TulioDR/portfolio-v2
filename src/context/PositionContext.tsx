import { useRouter } from "next/router";
import {
   useContext,
   createContext,
   useState,
   useRef,
   RefObject,
   useEffect,
} from "react";

interface AppContextInterface {
   currentIndex: number | null;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number | null>>;
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
   children: React.ReactNode;
};
export function PositionProvider({ children }: Props) {
   const [currentIndex, setCurrentIndex] = useState<number | null>(0);

   const homeBullet = useRef<HTMLButtonElement>(null);
   const aboutBullet = useRef<HTMLButtonElement>(null);
   const projectsBullet = useRef<HTMLButtonElement>(null);
   const contactBullet = useRef<HTMLButtonElement>(null);

   const value: AppContextInterface = {
      currentIndex,
      setCurrentIndex,
      homeBullet,
      aboutBullet,
      projectsBullet,
      contactBullet,
   };

   const router = useRouter();

   useEffect(() => {
      if (router.route !== "/") {
         setCurrentIndex(null);
      }
   }, [router.route]);

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
