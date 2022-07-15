import { useRouter } from "next/router";
import { useContext, createContext, useState, useEffect, useRef } from "react";

interface AppContextInterface {
   currentIndex: number;
   setCurrentIndex: any;
   pages: any;
   homeTab: any;
   aboutTab: any;
   projectsTab: any;
   contactTab: any;
}
const PositionContext = createContext({} as AppContextInterface);
export default function usePositionContext() {
   return useContext(PositionContext);
}
type Props = {
   children: any;
};

type Pages = {
   home: number;
   about: number;
   projects: number;
   contact: number;
};

const pages = {
   home: 0,
   about: 1,
   projects: 2,
   contact: 3,
} as Pages;

export function PositionProvider({ children }: Props) {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   const { asPath } = useRouter();

   useEffect(() => {
      const name = asPath.substring(2) as keyof typeof pages;
      setCurrentIndex(pages[name]);
   }, [asPath]);

   const homeTab = useRef<HTMLLIElement>(null);
   const aboutTab = useRef<HTMLLIElement>(null);
   const projectsTab = useRef<HTMLLIElement>(null);
   const contactTab = useRef<HTMLLIElement>(null);

   useEffect(() => {
      const handleWheel = (e: any): void => {
         if (e.deltaY < 0) {
            if (currentIndex > 0) {
               setCurrentIndex(currentIndex - 1);
               window.removeEventListener("wheel", handleWheel);
               if (currentIndex === 1) homeTab.current?.click();
               if (currentIndex === 2) aboutTab.current?.click();
               if (currentIndex === 3) projectsTab.current?.click();
            }
         }
         if (e.deltaY > 0) {
            if (currentIndex < 3) {
               setCurrentIndex(currentIndex + 1);
               window.removeEventListener("wheel", handleWheel);
               if (currentIndex === 0) aboutTab.current?.click();
               if (currentIndex === 1) projectsTab.current?.click();
               if (currentIndex === 2) contactTab.current?.click();
            }
         }
      };
      setTimeout(() => {
         window.addEventListener("wheel", handleWheel);
      }, 1200);
   }, [currentIndex]);

   const value = {
      currentIndex,
      setCurrentIndex,
      pages,
      homeTab,
      aboutTab,
      projectsTab,
      contactTab,
   };

   return (
      <PositionContext.Provider value={value}>
         {children}
      </PositionContext.Provider>
   );
}
