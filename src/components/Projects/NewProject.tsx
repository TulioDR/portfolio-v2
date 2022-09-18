import Image from "next/image";
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

import landscape from "../../assets/images/landscape2.jpg";
import JumbotronAnimation from "../Sections/Jumbotron/JumbotronAnimation";

type Props = {
   lg?: string;
};

export default function NewProject({ lg }: Props) {
   return (
      <div className={`relative overflow-hidden ${lg}`}>
         <MouseParallaxContainer enabled={false} className="h-full w-full">
            <MouseParallaxChild
               factorX={0.03}
               factorY={0.03}
               className="w-full h-full bg-1/2 relative border border-primary"
            >
               <Image
                  src={landscape}
                  alt="landscape"
                  layout="fill"
                  className="object-cover w-full h-full"
                  priority
               />
               <div className="w-full h-full bg-primary opacity-70 absolute top-0 left-0"></div>
            </MouseParallaxChild>
         </MouseParallaxContainer>
         <JumbotronAnimation />
      </div>
   );
}
