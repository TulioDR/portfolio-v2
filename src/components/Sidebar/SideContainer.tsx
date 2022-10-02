type Props = {
   children: React.ReactNode;
};

export default function SideContainer({ children }: Props) {
   return (
      <aside className="text-white fixed bottom-0 left-0 xl:top-0 xl:h-screen w-full xl:w-40 flex flex-row items-end pb-5 xl:flex-col justify-center xl:items-start z-10 xl:pl-16">
         <ul className="xl:space-y-10 mx-3 xl:mx-0 space-x-10 xl:space-x-0 flex flex-row items-end xl:items-start xl:flex-col xl:my-3 xl:pb-0 sidebar-pagination-container">
            {children}
         </ul>
      </aside>
   );
}
