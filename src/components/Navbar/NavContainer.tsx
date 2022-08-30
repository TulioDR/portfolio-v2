import { ReactNode } from "react";
import Tag from "../Others/Tag";

type Props = {
   children: ReactNode;
};

export default function NavContainer({ children }: Props) {
   return (
      <nav className="section font-light px-5 md:px-16 lg:px-20 xl:px-10 pt-2 md:pt-5 fixed w-full text-white z-30 md:text-lg lg:text-2xl">
         <div className="-translate-x-5">
            <Tag>nav</Tag>
         </div>

         <div className="flex justify-between items-center">{children}</div>
         <div className="-translate-x-5">
            <Tag closing>nav</Tag>
         </div>
      </nav>
   );
}
