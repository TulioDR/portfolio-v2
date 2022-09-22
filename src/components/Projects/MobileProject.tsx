import Image from "next/image";
import landscape from "../../assets/images/landscape2.jpg";

type Props = {};

export default function MobileProject({}: Props) {
   return (
      <div className="w-full h-full relative">
         <Image
            src={landscape}
            alt="landscape"
            layout="fill"
            className="object-cover w-full h-full"
            priority
         />
      </div>
   );
}
