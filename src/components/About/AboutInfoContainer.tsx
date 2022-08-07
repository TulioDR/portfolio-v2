type Props = { children: React.ReactNode };

export default function AboutInfoContainer({ children }: Props) {
   return (
      <div className="text-xs md:text-sm xl:text-base 2xl:text-lg">
         {children}
      </div>
   );
}
