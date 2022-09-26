type Props = {
   children: React.ReactNode;
   reverse?: boolean;
};

export default function CardContainer({ children, reverse }: Props) {
   return (
      <div
         className={` md:flex rounded-xl shadow-lg overflow-hidden w-full ${
            reverse ? "flex-row-reverse" : ""
         }`}
      >
         {children}
      </div>
   );
}
