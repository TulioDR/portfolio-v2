import { useRef } from "react";
import usePositionContext from "../context/PositionContext";

type Props = {
   page: string;
   home?: boolean;
   index: number;
   tabRef: any;
};

export default function SideSelector({ page, home, index, tabRef }: Props) {
   const { currentIndex, setCurrentIndex } = usePositionContext();

   const smallTab = useRef<HTMLAnchorElement>(null);
   const execute = () => {
      setCurrentIndex(index);
      smallTab.current?.click();
   };
   return (
      <li
         ref={tabRef}
         className={`bg-white md:h-1 w-1 duration-300 cursor-pointer list-none panel relative ${
            currentIndex === index || (home && currentIndex === 0)
               ? "h-10 md:w-10"
               : "h-6 md:w-6"
         }`}
         onClick={execute}
      >
         <a
            href={`#${page}`}
            className="absolute h-full w-full"
            ref={smallTab}
         ></a>
      </li>
   );
}
