import {
   createContext,
   Dispatch,
   ReactNode,
   SetStateAction,
   useContext,
   useEffect,
   useState,
} from "react";
import usePositionContext from "./PositionContext";

interface AppContextInterface {
   hoveredBullet: number;
   setHoveredBullet: Dispatch<SetStateAction<number>>;
   isMenuOpen: boolean;
   toggleMenu: any;
   closeMenu: any;
}

const NavbarContext = createContext({} as AppContextInterface);
export default function useNavbarContext() {
   return useContext(NavbarContext);
}
type Props = {
   children: ReactNode;
};
export function NavbarProvider({ children }: Props) {
   const { currentIndex } = usePositionContext();

   const [hoveredBullet, setHoveredBullet] = useState<number>(0);
   useEffect(() => {
      if (currentIndex != null) setHoveredBullet(currentIndex);
   }, [currentIndex]);

   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
   const closeMenu = () => setIsMenuOpen(false);

   const value = {
      hoveredBullet,
      setHoveredBullet,
      isMenuOpen,
      toggleMenu,
      closeMenu,
   };
   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
