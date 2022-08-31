import { ReactNode } from "react";
import TagContainer from "../Sections/TagContainer";

type Props = {
   children: ReactNode;
};

export default function SideContainer({ children }: Props) {
   return (
      <aside className="fixed bottom-0 left-0 xl:top-0 xl:h-screen w-full xl:w-40 flex flex-row items-center xl:flex-col justify-center xl:items-start z-10 xl:pl-10">
         <TagContainer tag="aside">
            <ul className="text-white flex xl:flex-col space-x-10 xl:space-x-0 xl:space-y-10 xl:my-3 items-end xl:items-start sidebar-pagination-container">
               {children}
            </ul>
         </TagContainer>
      </aside>
   );
}
