import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function NavContainer({ children }: Props) {
   return (
      <nav className="fixed top-0 section font-light flex items-center h-24 2xl:h-32 px-10 md:px-16 lg:px-20 xl:px-16 w-full text-white z-30 sm:text-lg lg:text-2xl">
         <div className="flex justify-between items-center w-full">
            {children}
         </div>
      </nav>
   );
}
