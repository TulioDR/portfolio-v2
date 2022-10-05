import { useContext, createContext, useState, useRef, RefObject } from "react";

interface AppContextInterface {
   currentIndex: number;
   setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
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
   const [currentIndex, setCurrentIndex] = useState<number>(0);

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

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
