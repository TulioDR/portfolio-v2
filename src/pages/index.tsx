import type { NextPage } from "next";
import Head from "next/head";
import { PositionProvider } from "../context/PositionContext";
import InitialAnimation from "../animations/InitialAnimation";

import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";
import HomePage from "../containers/HomePage";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";

import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";

import ScrollAdvice from "../components/ScrollAdvice";
import SwiperContainer from "../containers/SwiperContainer";
// import Background from "../components/Background";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Tulio Ruzo</title>
         </Head>

         <PositionProvider>
            <InitialAnimation />
            <Navbar />
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
