type Props = {
   children: React.ReactNode;
};

export default function JumbotronContainer({ children }: Props) {
   return (
      <div className="w-full drop-shadow-xl flex-1 relative overflow-hidden pl-5">
         {children}
      </div>
   );
}
