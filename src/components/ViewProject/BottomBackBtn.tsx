import React from "react";

type Props = {};

export default function BottomBackBtn({}: Props) {
   return (
      <div className="w-max mx-auto flex items-center space-x-7 hover:-translate-x-4 duration-300 cursor-pointer group">
         <span className="h-[0.15rem] w-20 bg-black">
            <div className="bg-black w-6 h-1/2 group-hover:-rotate-45 duration-300 origin-left"></div>
         </span>
         <span className="text-4xl text-black tracking-widest font-light">
            BACK
         </span>
      </div>
   );
}
