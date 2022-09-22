import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import JumbotronAnimation from "../Jumbotron/JumbotronAnimation";
import MobileProject from "./MobileProject";

export default function MobileProjectsShowcase() {
   return (
      <div className="flex-1 flex flex-col w-full sm:hidden">
         <Swiper
            speed={500}
            spaceBetween={0}
            slidesPerView={1}
            pagination={{
               el: ".mobile-projects-showcase-pagination-bullet-container",
               clickable: true,
               bulletClass: "mobile-projects-showcase-bullet",
               bulletActiveClass: "mobile-projects-showcase-bullet-active",
            }}
            modules={[Pagination]}
            className="w-full flex-1 relative"
         >
            <JumbotronAnimation />
            <SwiperSlide>
               <MobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <MobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <MobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <MobileProject />
            </SwiperSlide>
         </Swiper>
         <div className="h-8 w-full flex space-x-3 justify-center items-center mobile-projects-showcase-pagination-bullet-container"></div>
      </div>
   );
}
