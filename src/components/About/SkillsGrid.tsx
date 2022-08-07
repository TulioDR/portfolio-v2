import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function SkillsGrid({ children }: Props) {
   return (
      <div className="grid grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-5 w-full">
         {children}
      </div>
   );
}
