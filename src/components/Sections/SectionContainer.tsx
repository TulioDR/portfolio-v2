import { useEffect, useState } from "react";
import usePositionContext from "../../context/PositionContext";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperSlideInner from "./SwiperSlideInner";

type Props = {
   index: number;
   desktop: React.ReactElement;
   mobile?: React.ReactElement;
   home?: boolean;
};

export default function SectionContainer({
   index,
   desktop,
   mobile,
   home,
}: Props) {
   const { currentIndex } = usePositionContext();
   const [selected, setSelected] = useState(true);

   useEffect(() => {
      if (currentIndex === index) {
         setSelected(false);
         setTimeout(() => setSelected(true), 50);
      }
   }, [currentIndex, index]);

   return (
      <Swiper className="w-full h-full" followFinger={false} speed={500}>
         {selected && (
            <>
               <SwiperSlide>
                  <SwiperSlideInner>{desktop}</SwiperSlideInner>
               </SwiperSlide>
               {!home && (
                  <SwiperSlide className="w-full h-full flex flex-col sm:hidden">
                     <SwiperSlideInner mobile>{mobile}</SwiperSlideInner>
                  </SwiperSlide>
               )}
            </>
         )}
      </Swiper>
   );
}
