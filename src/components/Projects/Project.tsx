import Image from "next/image";
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

import landscape from "../../assets/images/landscape2.jpg";
import JumbotronAnimation from "../Jumbotron/JumbotronAnimation";

import { useRef } from "react";

type Props = {
   lg?: string;
   setValues: any;
};

export default function Project({ lg, setValues }: Props) {
   const project = useRef<HTMLDivElement>(null);

   const saveValues = () => {
      const { clientWidth, clientHeight, offsetLeft, offsetTop } =
         project.current!;

      setValues({
         width: clientWidth,
         height: clientHeight,
         x: offsetLeft,
         y: offsetTop,
      });
   };

   return (
      <div
         ref={project}
         className={`relative overflow-hidden cursor-pointer ${lg}`}
         onClick={saveValues}
      >
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
                  className="object-cover w-full brightness-50"
                  priority
               />
            </MouseParallaxChild>
         </MouseParallaxContainer>
         <JumbotronAnimation />
      </div>
   );
}
