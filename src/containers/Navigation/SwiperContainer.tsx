import { Swiper } from "swiper/react";
import { Mousewheel, Pagination, HashNavigation } from "swiper";
import usePositionContext from "../../context/PositionContext";
type Props = {
   children: React.ReactNode;
};

export default function SwiperContainer({ children }: Props) {
   const {
      setCurrentIndex,
      homeBullet,
      aboutBullet,
      projectsBullet,
      contactBullet,
   } = usePositionContext();

   return (
      <Swiper
         speed={1000}
         allowTouchMove={false}
         direction={"vertical"}
         spaceBetween={0}
         slidesPerView={1}
         mousewheel={true}
         onInit={(swiper) => {
            swiper.pagination.bullets[0] = homeBullet?.current!;
            swiper.pagination.bullets[1] = aboutBullet?.current!;
            swiper.pagination.bullets[2] = projectsBullet?.current!;
            swiper.pagination.bullets[3] = contactBullet?.current!;
         }}
         pagination={{
            el: ".sidebar-pagination-container",
            bulletClass: "sidebar-pagination",
            clickable: true,
            type: "custom",
         }}
         hashNavigation={{
            replaceState: true,
         }}
         onSlideChange={(e) => {
            setCurrentIndex(e.activeIndex);
         }}
         modules={[Mousewheel, Pagination, HashNavigation]}
         className="h-screen w-full"
      >
         {children}
      </Swiper>
   );
}
