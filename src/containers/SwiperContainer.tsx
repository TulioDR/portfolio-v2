import { ReactNode } from "react";
import { Swiper } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation } from "swiper";
import usePositionContext from "../context/PositionContext";
type Props = {
   children: ReactNode;
};

export default function SwiperContainer({ children }: Props) {
   const { setCurrentIndex } = usePositionContext();
   return (
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
         {children}
      </Swiper>
   );
}
