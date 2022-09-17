import React from "react";

type Props = { children: React.ReactNode; mobile?: boolean };

export default function SwiperSlideInner({ children, mobile }: Props) {
   return (
      <div className="w-full h-full pl-10 md:pl-16 lg:pl-20 xl:pl-40 2xl:pl-48">
         <div
            className={`w-full h-full pt-24 pb-36 sm:py-24 lg:pb-10 2xl:pb-32 2xl:py-32 pr-10 md:pr-16 lg:pr-20 2xl:pr-32 overflow-hidden flex ${
               mobile ? "flex-col" : ""
            }`}
         >
            {children}
         </div>
      </div>
   );
}
