type Props = {
   children: React.ReactNode;
   main?: boolean;
   selected?: boolean;
};

export default function SkillsGrid({ children, main, selected }: Props) {
   return (
      <ul
         className={`grid grid-cols-3 md:grid-cols-4 gap-1 sm:gap-2 lg:gap-4 min-w-max ${
            main
               ? ""
               : `absolute top-0 translate-x-full w-full duration-300 ${
                    selected ? "left-1 sm:left-2 lg:left-4" : "left-0"
                 }`
         }`}
      >
         {children}
      </ul>
   );
}
