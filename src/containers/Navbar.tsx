import { AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import Hamburger from "../components/Navbar/Hamburger";
import TranslateBtn from "../components/Navbar/TranslateBtn";
import NavContainer from "../components/Navbar/NavContainer";
import useNavbarContext from "../context/NavbarContext";

export default function Navbar() {
   const { isMenuOpen } = useNavbarContext();
   return (
      <>
         <NavContainer>
            <div className="">Tulio Ruzo</div>
            <div className="flex space-x-7 items-center font-medium">
               <TranslateBtn />
               <Hamburger />
            </div>
         </NavContainer>
         <AnimatePresence>{isMenuOpen && <Menu />}</AnimatePresence>
      </>
   );
}
