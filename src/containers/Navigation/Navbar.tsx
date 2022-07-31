import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Hamburger from "../../components/Navbar/Hamburger";
import TranslateBtn from "../../components/Navbar/TranslateBtn";
import NavContainer from "../../components/Navbar/NavContainer";
import useNavbarContext from "../../context/NavbarContext";
import Name from "../../components/Navbar/Name";

export default function Navbar() {
   const { isMenuOpen } = useNavbarContext();
   return (
      <>
         <NavContainer>
            <Name />
            <div className="flex space-x-7 items-center font-medium">
               <TranslateBtn />
               <Hamburger />
            </div>
         </NavContainer>
         <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
      </>
   );
}
