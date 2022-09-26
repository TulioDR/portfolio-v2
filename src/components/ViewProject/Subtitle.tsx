type Props = {
   children: React.ReactNode;
};

export default function Subtitle({ children }: Props) {
   return (
      <div className="text-gray-800 uppercase text-3xl font-semibold tracking-widest">
         {children}
      </div>
   );
}
