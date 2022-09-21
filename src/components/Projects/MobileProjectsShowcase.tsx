import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import JumbotronAnimation from "../Sections/Jumbotron/JumbotronAnimation";
import NewMobileProject from "./NewMobileProject";

export default function MobileProjectsShowcase() {
   return (
      <div className="flex-1 w-full sm:hidden">
         <Swiper
            speed={500}
            spaceBetween={0}
            slidesPerView={1}
            pagination={true}
            modules={[Pagination]}
            className="h-full w-full relative"
         >
            <JumbotronAnimation />
            <SwiperSlide>
               <NewMobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <NewMobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <NewMobileProject />
            </SwiperSlide>
            <SwiperSlide>
               <NewMobileProject />
            </SwiperSlide>
         </Swiper>
      </div>
   );
}
