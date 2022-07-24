import "../styles/globals.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
   return <Component {...pageProps} />;
}

export default MyApp;
