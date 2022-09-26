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
               <div className="h-screen w-full relative">
                  <InitialAnimation />
                  <Selected />
                  <AnimatePresence exitBeforeEnter>
                     <motion.div key={router.route} className="h-screen w-full">
                        <NavbarProvider>
                           <Navbar />
                        </NavbarProvider>
                        <Component {...pageProps} />;
                     </motion.div>
                  </AnimatePresence>
               </div>
            </LanguageProvider>
         </PositionProvider>
      </RouteProvider>
   );
}

export default MyApp;
