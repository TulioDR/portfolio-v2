import usePositionContext from "../../context/PositionContext";

type Props = {
   index: number;
   bulletRef: any;
};

export default function SidePagination({ index, bulletRef }: Props) {
   const { currentIndex } = usePositionContext();

   return (
      <li
         ref={bulletRef}
         className={`swiper-pagination-bullet h-4 lg:h-1 w-1 bg-white cursor-pointer duration-500 ${
            currentIndex === index ? "h-10 lg:h-1 lg:w-10" : "lg:w-6"
         }`}
      ></li>
   );
}
