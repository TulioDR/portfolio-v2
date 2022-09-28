import { useInView } from "framer-motion";
import { createContext, useContext, useEffect, useState, useRef } from "react";
import usePositionContext from "./PositionContext";

interface AppContextInterface {
   hoveredBullet: number;
   setHoveredBullet: React.Dispatch<React.SetStateAction<number>>;
   isMenuOpen: boolean;
   toggleMenu: any;
   closeMenu: any;
   isWhiteBackground: boolean;
   isWhiteArrow: boolean;
   whiteBackRef: any;
}

const NavbarContext = createContext({} as AppContextInterface);
export default function useNavbarContext() {
   return useContext(NavbarContext);
}
type Props = {
   children: React.ReactNode;
};
export function NavbarProvider({ children }: Props) {
   const { currentIndex } = usePositionContext();

   const [hoveredBullet, setHoveredBullet] = useState<number>(0);
   useEffect(() => {
      if (currentIndex != null) setHoveredBullet(currentIndex);
   }, [currentIndex]);

   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
   };
   const closeMenu = () => setIsMenuOpen(false);

   const [isWhiteBackground, setIsWhiteBackground] = useState<boolean>(false);
   const [isWhiteArrow, setIsWhiteArrow] = useState<boolean>(false);
   const whiteBackRef = useRef(null);
   const isInView = useInView(whiteBackRef, {
      margin: "0px 0px -95% 0px",
   });
   const isArrowInView = useInView(whiteBackRef, {
      margin: "0px 0px -84% 0px",
   });

   useEffect(() => {
      setIsWhiteBackground(isInView);
      setIsWhiteArrow(isArrowInView);
   }, [isInView, isArrowInView]);

   const value = {
      hoveredBullet,
      setHoveredBullet,
      isMenuOpen,
      toggleMenu,
      closeMenu,
      isWhiteBackground,
      isWhiteArrow,
      whiteBackRef,
   };
   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
