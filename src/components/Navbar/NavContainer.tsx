import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function NavContainer({ children }: Props) {
   return (
      <nav className="section font-light flex items-center lg:items-end 2xl:items-center h-24 2xl:h-32 px-10 md:px-16 lg:px-20 xl:px-10 fixed w-full text-white z-30 md:text-lg lg:text-2xl">
         <div className="flex justify-between items-center w-full">
            {children}
         </div>
      </nav>
   );
}
