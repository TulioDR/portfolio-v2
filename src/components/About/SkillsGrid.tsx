import { ReactNode } from "react";

type Props = {
   children: ReactNode;
   main?: boolean;
   isMain: boolean;
};

export default function SkillsGrid({ children, main, isMain }: Props) {
   return (
      <div
         className={`grid grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 lg:gap-y-4 min-w-max ${
            main ? "" : "absolute left-full w-full ml-5"
         } duration-500 ${isMain ? "" : "-translate-x-full"} ml-0`}
      >
         {children}
      </div>
   );
}
