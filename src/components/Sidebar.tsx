import { useState } from "react";

type Props = {};
const pages = [1, 2, 3, 4];
export default function Sidebar({}: Props) {
   const [selected, setSelected] = useState(1);

   return (
      <div className="fixed left-0 top-0 h-screen bg-gray-700 w-40 flex items-center">
         <div className="text-white flex flex-col space-y-10 ml-10">
            {pages.map((page) => (
               <div
                  key={page}
                  className={`bg-white h-1 duration-300 cursor-pointer ${
                     selected === page ? "w-10" : "w-6"
                  }`}
                  onClick={() => setSelected(page)}
               ></div>
            ))}
         </div>
      </div>
   );
}
