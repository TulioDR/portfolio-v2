import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function DescriptionContainer({ children }: Props) {
   return (
      <div className="space-y-5 2xl:space-y-8 w-2/5 flex flex-col justify-center z-10">
         {children}
      </div>
   );
}
