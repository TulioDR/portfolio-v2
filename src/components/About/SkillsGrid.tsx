import { ReactNode } from "react";

type Props = {
   children: ReactNode;
};

export default function SkillsGrid({ children }: Props) {
   return (
      <div className="grid grid-cols-4 gap-3 w-max mx-auto">{children}</div>
   );
}
