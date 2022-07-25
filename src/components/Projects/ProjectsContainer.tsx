import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   showCarousel: boolean;
};

export default function ProjectsContainer({ children, showCarousel }: Props) {
   return (
      <div
         className={`w-full flex-1 overflow-hidden bg-primary ${
            showCarousel
               ? "flex space-x-10 items-center px-20"
               : "grid grid-flow-col grid-rows-2 gap-5 pb-5"
         }`}
      >
         {children}
      </div>
   );
}
