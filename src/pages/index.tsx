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
import Background from "../components/Others/Background";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>TULIO RUZO PORTFOLIO</title>
         </Head>
         <Background />
         <PositionProvider>
            <InitialAnimation />
            <NavbarProvider>
               <Navbar />
            </NavbarProvider>
            <Sidebar />
            <ScrollAdvice />
            <SwiperContainer>
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
         </PositionProvider>
      </>
   );
};

export default Home;
