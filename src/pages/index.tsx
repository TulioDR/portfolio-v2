import type { NextPage } from "next";
import Head from "next/head";
import { PositionProvider } from "../context/PositionContext";

import ScrollAdvice from "../components/Others/ScrollAdvice";

import { NavbarProvider } from "../context/NavbarContext";
import InitialAnimation from "../animations/InitialAnimation";

import Navbar from "../containers/Navigation/Navbar";
import Sidebar from "../containers/Navigation/Sidebar";
import SwiperContainer from "../containers/Navigation/SwiperContainer";
import { SwiperSlide } from "swiper/react";

import HomePage from "../containers/Sections/HomePage";
import About from "../containers/Sections/About";
import Contact from "../containers/Sections/Contact";
import Projects from "../containers/Sections/Projects";
import { LanguageProvider } from "../context/LanguageContext";
import MobileContactForm from "../containers/Parts/MobileContactForm";
import { MobileFormProvider } from "../context/MobileFormContext";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>TULIO RUZO PORTFOLIO</title>
         </Head>
         <PositionProvider>
            <InitialAnimation />
            <LanguageProvider>
               <ScrollAdvice />
               <MobileFormProvider>
                  <SwiperContainer>
                     <NavbarProvider>
                        <Navbar />
                     </NavbarProvider>
                     <Sidebar />
                     <SwiperSlide data-hash="home">
                        <HomePage />
                     </SwiperSlide>
                     <SwiperSlide data-hash="about">
                        <About />
                     </SwiperSlide>
                     <SwiperSlide data-hash="projects">
                        <Projects />
                     </SwiperSlide>
                     <SwiperSlide data-hash="contact">
                        <Contact />
                     </SwiperSlide>
                  </SwiperContainer>
                  <MobileContactForm />
               </MobileFormProvider>
            </LanguageProvider>
         </PositionProvider>
      </>
   );
};

export default Home;
