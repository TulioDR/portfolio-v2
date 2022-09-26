type Props = {
   children?: React.ReactNode;
   info?: boolean;
};

export default function CardInner({ children, info }: Props) {
   return (
      <div
         className={`w-full md:w-1/2  aspect-square flex items-center p-14 ${
            info ? "bg-white" : "bg-gray-800"
         }`}
      >
         {children}
      </div>
   );
}
