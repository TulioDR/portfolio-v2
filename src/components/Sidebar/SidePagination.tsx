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
         className={`sidebar-pagination xl:h-1 w-1 bg-white cursor-pointer duration-500 ${
            currentIndex === index ? "h-10 xl:h-1 xl:w-10" : "xl:w-6 h-4"
         }`}
      ></li>
   );
}
