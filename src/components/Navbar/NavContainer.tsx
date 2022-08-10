import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function NavContainer({ children }: Props) {
   return (
      <nav className="section font-light flex justify-between items-center px-5 md:px-16 lg:px-20 xl:px-10 pt-5 md:pt-8 fixed w-full text-white z-30 md:text-lg lg:text-2xl">
         {children}
      </nav>
   );
}
