import useNavbarContext from "../../context/NavbarContext";

type Props = { children: React.ReactNode };

export default function ProjectDetailsContainer({ children }: Props) {
   const { whiteBackRef } = useNavbarContext();
   return (
      <div
         ref={whiteBackRef}
         className="bg-gray-200 text-gray-500 w-full px-5 sm:px-10 md:px-16 lg:px-20 py-20 space-y-20"
      >
         {children}
      </div>
   );
}
