import { useEffect, useState } from "react";

type Props = {
   children: any;
   index: number;
   currentIndex: number;
};

export default function SectionContainer({
   children,
   index,
   currentIndex,
}: Props) {
   const [selected, setSelected] = useState(true);

   useEffect(() => {
      if (currentIndex === index) {
         setSelected(false);
         setTimeout(() => setSelected(true), 50);
      }
   }, [currentIndex]);

   return (
      <section className="h-full w-full pl-40 2xl:pl-48 py-24 2xl:py-32 pr-24 2xl:pr-32 text-white">
         <div className="h-full w-full flex">
            <>{selected && children}</>
         </div>
      </section>
   );
}
