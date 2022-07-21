type Props = {};

export default function Underline({}: Props) {
   return (
      <div className="space-y-5 w-36">
         <div className="bg-secondary w-2/3 h-1 rounded-sm"></div>
         <div className="flex justify-end">
            <div className="bg-secondary w-2/3 h-1 rounded-sm "></div>
         </div>
      </div>
   );
}
