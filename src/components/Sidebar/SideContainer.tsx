import { ReactNode } from "react";
import Tag from "../Sections/Tag";
import TagContainer from "../Sections/TagContainer";

type Props = {
   children: ReactNode;
};

export default function SideContainer({ children }: Props) {
   return (
      <aside className="text-white fixed bottom-0 left-0 xl:top-0 xl:h-screen w-full xl:w-40 flex flex-row items-center xl:flex-col justify-center xl:items-start z-10 xl:pl-10">
         <div className="hidden xl:block vertical">
            <TagContainer tag="aside">
               <ul className="space-y-10 my-3 sidebar-pagination-container">
                  {children}
               </ul>
            </TagContainer>
         </div>
         <div className="xl:hidden flex items-end space-x-3 pb-5 horizontal">
            <Tag>footer</Tag>
            <ul className="flex space-x-10 items-end sidebar-pagination-container">
               {children}
            </ul>
            <Tag closing>footer</Tag>
         </div>
      </aside>
   );
}
