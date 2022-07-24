import type { NextPage } from "next";
import Head from "next/head";
import { PositionProvider } from "../context/PositionContext";
// import InitialAnimation from "../animations/InitialAnimation";

import Navbar from "../containers/Navbar";
import Sidebar from "../containers/Sidebar";
import HomePage from "../containers/HomePage";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";

import { SwiperSlide } from "swiper/react";

import ScrollAdvice from "../components/ScrollAdvice";
import SwiperContainer from "../containers/SwiperContainer";
// import Background from "../components/Background";
import { motion } from "framer-motion";

const Home: NextPage = () => {
   return (
      <>
         <Head>
            <title>Tulio Ruzo</title>
         </Head>

         <PositionProvider>
            <motion.div
               className="fixed top-0 left-0 bg-zinc-900 w-full h-screen z-50"
               initial={{ y: 0 }}
               animate={{ y: "-100%" }}
               transition={{
                  duration: 0.9,
                  ease: [0.645, 0.045, 0.355, 1],
               }}
            ></motion.div>
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
