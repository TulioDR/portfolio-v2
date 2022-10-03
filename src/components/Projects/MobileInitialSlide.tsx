import { useEffect } from "react";
import { useSwiper } from "swiper/react";
import useRouteContext from "../../context/RouteContext";

type Props = {};

export default function MobileInitialSlide({}: Props) {
   const { currentLink } = useRouteContext();

   const swiper = useSwiper();
   useEffect(() => {
      if (currentLink === "film-organizer") {
         swiper.slideTo(0, 0);
      }
      if (currentLink === "simple-pokedex") {
         swiper.slideTo(1, 0);
      }
      if (currentLink === "portfolio-v1") {
         swiper.slideTo(2, 0);
      }
   }, [currentLink, swiper]);
   return <></>;
}
