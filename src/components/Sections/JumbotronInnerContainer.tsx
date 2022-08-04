type Props = {
   children: React.ReactNode;
};

export default function JumbotronInnerContainer({ children }: Props) {
   return (
      <div className="absolute top-0 w-full h-full flex justify-center items-center flex-col">
         {children}
      </div>
   );
}
