import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import MobileProject from "./MobileProject";
import RevealImageAnimation from "../../animations/RevealImageAnimation";
import MobileInitialSlide from "./MobileInitialSlide";
import filmOrganizerMain from "../../assets/projects/mainInfo/filmOrganizerMain";
import pokedexMain from "../../assets/projects/mainInfo/pokedexMain";
import dashboardMain from "../../assets/projects/mainInfo/dashboardMain";

type Props = {};

export default function MobileProjectsShowcase({}: Props) {
   return (
      <div className="flex-1 flex flex-col w-full sm:hidden">
         <div id="mobile-projects" className="flex-1 w-full">
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
               className="w-full h-full relative"
            >
               <MobileInitialSlide />
               <RevealImageAnimation />
               <SwiperSlide>
                  <MobileProject project={filmOrganizerMain} />
               </SwiperSlide>
               <SwiperSlide>
                  <MobileProject project={pokedexMain} />
               </SwiperSlide>
               <SwiperSlide>
                  <MobileProject project={dashboardMain} />
               </SwiperSlide>
            </Swiper>
         </div>
         <div className="h-8 w-full flex space-x-3 justify-center items-center mobile-projects-showcase-pagination-bullet-container"></div>
      </div>
   );
}
