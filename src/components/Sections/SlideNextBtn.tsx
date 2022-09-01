import { useSwiper } from "swiper/react";
import Info from "./Info";
import TagContainer from "./TagContainer";

type Props = { text: string };

export default function SlideNextBtn({ text }: Props) {
   const swiper = useSwiper();

   return (
      <div className="sm:hidden">
         <TagContainer tag="button">
            <Info>
               <button
                  className="bg-secondary rounded-full flex items-center w-max px-4 space-x-3"
                  onClick={() => swiper.slideNext()}
               >
                  <span>{text}</span>
                  <span className="material-icons text-4xl animate-bounce-horizontal">
                     trending_flat
                  </span>
               </button>
            </Info>
         </TagContainer>
      </div>
   );
}
