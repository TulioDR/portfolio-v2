import React from "react";

type Props = {
   children: React.ReactNode;
   onClick: any;
   mobile?: boolean;
};

export default function BottomBackBtn({ children, onClick, mobile }: Props) {
   return (
      <button
         onClick={() => onClick(mobile)}
         className={`${
            mobile ? "flex sm:hidden" : "hidden sm:flex"
         } w-max mx-auto items-center space-x-7 hover:-translate-x-4 duration-300 cursor-pointer group`}
      >
         <span className="h-[0.15rem] w-20 bg-black">
            <div className="bg-black w-6 h-1/2 group-hover:-rotate-45 duration-300 origin-left"></div>
         </span>
         <span className="text-4xl text-black tracking-widest font-light uppercase">
            {children}
         </span>
      </button>
   );
}
