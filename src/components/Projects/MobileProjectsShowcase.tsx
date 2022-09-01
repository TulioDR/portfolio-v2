import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { projectsList } from "../../assets/constants/projects";
import MobileProject from "./MobileProject";

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
            nested={true}
         >
            {projectsList.map((project, index) => (
               <SwiperSlide key={index} className="flex items-center">
                  <MobileProject project={project} />
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="w-full flex space-x-3 justify-center mobile-projects-showcase-pagination-bullet-container"></div>
      </>
   );
}
