import Image from "next/image";
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

import mountainsFront from "../assets/images/background/mountains_front.png";
import mountainsBack from "../assets/images/background/mountains_behind.png";
import moon from "../assets/images/background/moon.svg";
import stars from "../assets/images/background/stars.png";

type Props = {};

export default function Background({}: Props) {
   return (
      <div className="h-screen w-full fixed top-0 left-0">
         <MouseParallaxContainer
            useWindowMouseEvents={true}
            className="h-full w-full relative"
         >
            <MouseParallaxChild
               factorX={0.01}
               factorY={0.01}
               className={`w-full h-full absolute top-0`}
               updateStyles={{
                  transform: "scale(1.05)",
               }}
            >
               <Image
                  src={stars}
                  alt="stars"
                  layout="fill"
                  className="object-cover w-full h-full"
               />
            </MouseParallaxChild>
            <MouseParallaxChild
               factorX={0.0}
               factorY={0.0}
               className={`w-full absolute flex justify-center top-10`}
               updateStyles={{
                  transform: "scale(1.05)",
               }}
            >
               <Image
                  src={moon}
                  alt="moon"
                  height={150}
                  width={150}
                  className="mx-auto"
               />
            </MouseParallaxChild>
            <MouseParallaxChild
               factorX={0.01}
               factorY={0.01}
               className={`w-full h-full absolute bottom-8`}
               updateStyles={{
                  transform: "scale(1.05)",
               }}
            >
               <Image
                  src={mountainsBack}
                  alt="mountains-back"
                  layout="fill"
                  className="object-cover w-full h-full"
               />
            </MouseParallaxChild>
            <MouseParallaxChild
               factorX={0.02}
               factorY={0.02}
               className={`w-full h-full absolute top-0`}
               updateStyles={{
                  transform: "scale(1.05)",
               }}
            >
               <Image
                  src={mountainsFront}
                  alt="mountains-front"
                  layout="fill"
                  className="object-cover w-full h-full"
               />
            </MouseParallaxChild>
         </MouseParallaxContainer>
         <div className="w-full h-full bg-primary opacity-60 absolute bottom-0 left-0"></div>
      </div>
   );
}
