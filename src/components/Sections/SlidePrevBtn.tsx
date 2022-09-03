import { useSwiper } from "swiper/react";
import useLanguageContext from "../../context/LanguageContext";

type Props = {};

export default function SlidePrevBtn({}: Props) {
   const swiper = useSwiper();
   const { currentIdiom } = useLanguageContext();
   const { goBack } = currentIdiom.others;

   return (
      <button
         className="bg-secondary rounded-full flex items-center px-4 space-x-2 mx-auto"
         onClick={() => swiper.slidePrev()}
      >
         <span className="flex items-center">
            <span className="material-icons rotate-180 text-4xl">
               trending_flat
            </span>
         </span>
         <span className="text-sm">{goBack}</span>
      </button>
   );
}
