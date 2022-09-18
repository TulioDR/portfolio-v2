type Props = {
   children: React.ReactNode;
};

export default function JumbotronContainer({ children }: Props) {
   return (
      <div className="w-full h-full relative overflow-hidden">{children}</div>
   );
}
