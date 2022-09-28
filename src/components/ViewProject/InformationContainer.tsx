type Props = {
   children: React.ReactNode;
};

export default function InformationContainer({ children }: Props) {
   return (
      <div className="w-full lg:2/3 xl:w-2/3 2xl:w-1/2 mx-auto flex justify-between space-x-10">
         {children}
      </div>
   );
}
