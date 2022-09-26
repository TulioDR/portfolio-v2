import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import JumbotronAnimation from "../Jumbotron/JumbotronAnimation";
import MobileProject from "./MobileProject";
import { useRef } from "react";

type Props = {};

export default function MobileProjectsShowcase({}: Props) {
   const project = useRef<HTMLDivElement>(null);

   const saveValues = () => {
      // const { clientWidth, clientHeight, offsetLeft, offsetTop } =
      //    project.current!;
   };

   return (
      <div className="flex-1 flex flex-col w-full sm:hidden">
         <div ref={project} className="flex-1 w-full">
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
               <JumbotronAnimation />
               <SwiperSlide>
                  <MobileProject saveValues={saveValues} />
               </SwiperSlide>
               <SwiperSlide>
                  <MobileProject saveValues={saveValues} />
               </SwiperSlide>
               <SwiperSlide>
                  <MobileProject saveValues={saveValues} />
               </SwiperSlide>
               <SwiperSlide>
                  <MobileProject saveValues={saveValues} />
               </SwiperSlide>
            </Swiper>
         </div>
         <div className="h-8 w-full flex space-x-3 justify-center items-center mobile-projects-showcase-pagination-bullet-container"></div>
      </div>
   );
}
