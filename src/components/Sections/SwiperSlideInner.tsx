import React from "react";

type Props = { children: React.ReactNode; mobile?: boolean };

export default function SwiperSlideInner({ children, mobile }: Props) {
   return (
      <div
         className={`w-full h-full pb-20 py-24 2xl:py-32 pr-10 md:pr-16 lg:pr-20 2xl:pr-32 overflow-hidden flex ${
            mobile ? "flex-col" : ""
         }`}
      >
         {children}
      </div>
   );
}
