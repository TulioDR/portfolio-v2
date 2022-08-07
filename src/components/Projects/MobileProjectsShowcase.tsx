import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const projectsArray = [1, 2, 3, 4, 5, 6, 7, 8];
export default function MobileProjectsShowcase() {
   return (
      <>
         <Swiper
            speed={500}
            spaceBetween={20}
            slidesPerView={1.3}
            centeredSlides={true}
            pagination={{
               el: ".mobile-projects-showcase-pagination-bullet-container",
               clickable: true,
               bulletClass: "mobile-projects-showcase-bullet",
               bulletActiveClass: "mobile-projects-showcase-bullet-active",
            }}
            modules={[Pagination]}
            className="w-full"
         >
            {projectsArray.map((project) => (
               <SwiperSlide key={project} className="flex items-center">
                  <div className="aspect-16/9 w-full bg-orange-800 drop-shadow-md"></div>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="w-full flex space-x-3 justify-center mobile-projects-showcase-pagination-bullet-container"></div>
      </>
   );
}
