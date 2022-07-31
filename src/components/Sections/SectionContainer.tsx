import { useEffect, useState } from "react";
import usePositionContext from "../../context/PositionContext";

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
      <section className="h-full w-full pl-40 2xl:pl-48 text-white">
         <div className="h-full w-full flex overflow-hidden py-24 2xl:py-32 pr-24 2xl:pr-32">
            <>{selected && children}</>
         </div>
      </section>
   );
}
