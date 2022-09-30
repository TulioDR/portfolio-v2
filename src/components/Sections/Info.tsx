type Props = {
   children: React.ReactNode;
};

export default function Info({ children }: Props) {
   return (
      <div className="text-base md:text-lg lg:text-3xl font-light">
         {children}
      </div>
   );
}
