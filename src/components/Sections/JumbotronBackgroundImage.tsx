import Image, { StaticImageData } from "next/image";
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function JumbotronBackgroundImage({ src, alt }: Props) {
   return (
      <MouseParallaxContainer
         useWindowMouseEvents={true}
         className="h-full w-full"
      >
         <MouseParallaxChild
            factorX={0.03}
            factorY={0.03}
            className="w-full h-full bg-1/2"
            updateStyles={{
               transform: "scale(1.2)",
            }}
         >
            <Image
               src={src}
               alt={alt}
               layout="fill"
               className="object-cover w-full h-full grayscale"
            />
            <div className="w-full h-full bg-primary opacity-70 absolute top-0 left-0"></div>
         </MouseParallaxChild>
      </MouseParallaxContainer>
   );
}
