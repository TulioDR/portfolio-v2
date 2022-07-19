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

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/hash-navigation";

import { useState } from "react";

const Home: NextPage = () => {
   const [currentIndex, setCurrentIndex] = useState<number>(0);
   return (
      <>
         <Head>
            <title>Tulio Ruzo</title>
         </Head>

         <PositionProvider>
            <InitialAnimation />
            <Navbar />
            <Sidebar />

            <Swiper
               speed={1000}
               allowTouchMove={false}
               direction={"vertical"}
               spaceBetween={0}
               slidesPerView={1}
               mousewheel={true}
               pagination={{
                  el: ".swiper-pagination",
                  clickable: true,
                  renderBullet: function (index, className) {
                     console.log(index);
                     return '<li class="' + className + '"></li>';
                  },
               }}
               hashNavigation={{
                  replaceState: true,
               }}
               onSlideChange={(e) => {
                  setCurrentIndex(e.activeIndex);
               }}
               // onSwiper={(swiper: any) => console.log(swiper)}
               modules={[Mousewheel, Pagination, HashNavigation]}
               className="mySwiper h-screen w-full"
            >
               <SwiperSlide data-hash="home">
                  <HomePage currentIndex={currentIndex} />
               </SwiperSlide>
               <SwiperSlide data-hash="about">
                  <About currentIndex={currentIndex} />
               </SwiperSlide>
               <SwiperSlide data-hash="projects">
                  <Projects currentIndex={currentIndex} />
               </SwiperSlide>
               <SwiperSlide data-hash="contact">
                  <Contact currentIndex={currentIndex} />
               </SwiperSlide>
            </Swiper>
         </PositionProvider>
      </>
   );
};

export default Home;
