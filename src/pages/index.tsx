import type { NextPage } from "next";
import Head from "next/head";

import ScrollAdvice from "../components/Others/ScrollAdvice";

import Sidebar from "../containers/Navigation/Sidebar";
import SwiperContainer from "../containers/Navigation/SwiperContainer";
import { SwiperSlide } from "swiper/react";

import HomePage from "../containers/Sections/HomePage";
import About from "../containers/Sections/About";
import Contact from "../containers/Sections/Contact";
import Projects from "../containers/Sections/Projects";

import MobileContactForm from "../containers/Parts/MobileContactForm";
import { MobileFormProvider } from "../context/MobileFormContext";
import { motion } from "framer-motion";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>TULIO RUZO PORTFOLIO</title>
         </Head>
         <motion.div
            exit={{ transition: { duration: 1 } }}
            className="h-screen w-full hide-scrollbar"
         >
            <ScrollAdvice />
            <Sidebar />
            <MobileFormProvider>
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
               <MobileContactForm />
            </MobileFormProvider>
         </motion.div>
      </>
   );
};

export default Home;
