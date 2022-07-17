export default function Sidebar() {
   return (
      <aside className="fixed bottom-0 left-0 md:top-0 md:h-screen w-full md:w-40 flex justify-center md:justify-start items-center z-10 bg-slate-900">
         <ul className="text-white flex md:flex-col space-x-10 md:space-x-0 md:space-y-10 md:ml-10 mb-10 md:mb-0 items-end md:items-start swiper-pagination"></ul>
      </aside>
   );
}
