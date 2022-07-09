import { useState } from "react";

export default function Navbar() {
   const [darkMode, setDarkMode] = useState(false);
   const toggle = () => setDarkMode(!darkMode);
   return (
      <div className="flex justify-between px-10 py-6 bg-black fixed w-full text-white z-10">
         <div className="text-2xl">Tulio Ruzo</div>
         <div className="flex space-x-7 items-center font-medium">
            <button className="grid" onClick={toggle}>
               <span className="material-icons">
                  {darkMode ? "light_mode" : "dark_mode"}
               </span>
            </button>
            <button className="flex">
               <span className="material-icons mr-1">translate</span>
               <span>EN/ES</span>
            </button>
            <button className="grid">
               <span className="material-icons text-4xl">menu</span>
            </button>
         </div>
      </div>
   );
}
