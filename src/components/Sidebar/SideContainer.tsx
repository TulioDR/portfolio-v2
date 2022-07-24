import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function SideContainer({ children }: Props) {
   return (
      <aside className="fixed bottom-0 left-0 lg:top-0 lg:h-screen w-full lg:w-40 flex justify-center lg:justify-start items-center z-10">
         <ul className="text-white flex lg:flex-col space-x-10 lg:space-x-0 lg:space-y-10 lg:ml-10 mb-10 lg:mb-0 items-end lg:items-start swiper-pagination">
            {children}
         </ul>
      </aside>
   );
}
