import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import type { AppProps } from "next/app";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { NavbarProvider } from "../context/NavbarContext";
import Navbar from "../containers/Navigation/Navbar";
import { PositionProvider } from "../context/PositionContext";
import { LanguageProvider } from "../context/LanguageContext";
import { RouteProvider } from "../context/RouteContext";
import Selected from "../components/Others/Selected";
import InitialAnimation from "../animations/InitialAnimation";

function MyApp({ Component, pageProps }: AppProps) {
   const router = useRouter();
   return (
      <RouteProvider>
         <PositionProvider>
            <LanguageProvider>
               <div className="w-full overflow-x-hidden relative">
                  <InitialAnimation />
                  <Selected />
                  <AnimatePresence exitBeforeEnter>
                     <motion.div key={router.route} className="w-full">
                        <NavbarProvider>
                           <Navbar />
                           <Component {...pageProps} />
                        </NavbarProvider>
                     </motion.div>
                  </AnimatePresence>
               </div>
            </LanguageProvider>
         </PositionProvider>
      </RouteProvider>
   );
}

export default MyApp;
