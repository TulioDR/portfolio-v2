import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function NavContainer({ children }: Props) {
   return (
      <nav className="section flex justify-between items-center px-10 pt-8 fixed w-full text-white z-30 text-2xl">
         {children}
      </nav>
   );
}
