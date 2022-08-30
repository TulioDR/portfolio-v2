type Props = {
   closing?: boolean;
   children: React.ReactNode;
};

export default function Tag({ closing, children }: Props) {
   return (
      <div className="font-dancing text-3xl text-gray-500 h-5 flex items-center">
         <span className="-translate-y-[0.3rem]">{`<`}</span>
         <span className="text-sm tracking-widest">{`${
            closing ? "/" : ""
         }${children}`}</span>
         <span className="-translate-y-[0.3rem]">{">"}</span>
      </div>
   );
}
