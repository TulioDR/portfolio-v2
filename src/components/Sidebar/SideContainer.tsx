import { ReactNode } from "react";
import Tag from "../Others/Tag";

type Props = {
   children: ReactNode;
};

export default function SideContainer({ children }: Props) {
   return (
      <aside className="fixed bottom-0 left-0 xl:top-0 xl:h-screen w-full xl:w-40 flex flex-col justify-center xl:justify-center  z-10">
         <div className="translate-x-5 mb-3">
            <Tag>aside</Tag>
         </div>

         <ul className="text-white flex xl:flex-col space-x-10 xl:space-x-0 xl:space-y-10 xl:ml-10 mb-5 xl:mb-0 items-end xl:items-start sidebar-pagination-container">
            {children}
         </ul>
         <div className="translate-x-5 mt-3">
            <Tag closing>aside</Tag>
         </div>
      </aside>
   );
}
