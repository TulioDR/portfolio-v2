import Image from "next/image";

import landscape from "../../assets/images/landscape2.jpg";

type Props = {
   saveValues: any;
};

export default function MobileProject({ saveValues }: Props) {
   return (
      <div className="w-full h-full relative" onClick={saveValues}>
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
