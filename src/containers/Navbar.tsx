export default function Navbar() {
   return (
      <div className="section flex justify-between px-10 py-6 fixed w-full text-white z-10">
         <div className="text-2xl">Tulio Ruzo</div>
         <div className="flex space-x-7 items-center font-medium">
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
