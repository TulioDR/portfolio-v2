import React from "react";

type Props = {};

export default function ViewCodeBtn({}: Props) {
   return (
      <button className="rounded-lg bg-secondary absolute bottom-14 right-14 w-14 h-14 group flex justify-end hover:w-44 duration-300 overflow-hidden">
         <div className="flex items-center h-full w-44">
            <span className="h-12 w-[7.5rem] grid place-content-center translate-x-2 text-lg">
               View Code
            </span>
            <span className="group-hover:rotate-180 duration-300 text-3xl material-icons w-14">
               code
            </span>
         </div>
      </button>
   );
}
