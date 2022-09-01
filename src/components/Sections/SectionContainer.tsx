import { useEffect, useState } from "react";
import usePositionContext from "../../context/PositionContext";
import { Swiper } from "swiper/react";
type Props = {
   children: any;
   index: number;
};

export default function SectionContainer({ children, index }: Props) {
   const { currentIndex } = usePositionContext();
   const [selected, setSelected] = useState(true);

   useEffect(() => {
      if (currentIndex === index) {
         setSelected(false);
         setTimeout(() => setSelected(true), 50);
      }
   }, [currentIndex]);
   return (
      <section className="h-full w-full pl-10 md:pl-16 lg:pl-20 xl:pl-40 2xl:pl-48 text-white">
         <div className="h-full w-full flex flex-col sm:flex-row overflow-hidden pb-20 py-24 2xl:py-32 pr-10 md:pr-16 lg:pr-20 2xl:pr-32">
            <Swiper
               className="w-full h-full"
               spaceBetween={0}
               resistance={true}
               resistanceRatio={0}
               nested={true}
            >
               <>{selected && children}</>
            </Swiper>
         </div>
      </section>
   );
}
