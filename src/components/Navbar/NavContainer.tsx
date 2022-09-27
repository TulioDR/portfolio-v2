import useNavbarContext from "../../context/NavbarContext";

type Props = {
   children: React.ReactNode;
};

export default function NavContainer({ children }: Props) {
   const { isWhiteBackground } = useNavbarContext();

   return (
      <nav className="fixed top-0 section font-light flex items-center h-24 2xl:h-32 px-10 md:px-16 lg:px-20 xl:px-16 w-full z-30">
         <div
            className={`flex justify-between items-center w-full sm:text-xl md:text-2xl ${
               isWhiteBackground ? "text-black" : "text-white"
            }`}
         >
            {children}
         </div>
      </nav>
   );
}
