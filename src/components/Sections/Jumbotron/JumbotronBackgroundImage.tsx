import Image, { StaticImageData } from "next/image";

type Props = {
   src: StaticImageData;
   alt: string;
   about?: boolean;
};

export default function JumbotronBackgroundImage({ src, alt, about }: Props) {
   return (
      <div className="h-full w-full">
         <div className="w-full h-full bg-1/2 relative">
            <Image
               src={src}
               alt={alt}
               layout="fill"
               className="object-cover w-full h-full"
               priority
            />
            <div
               className={`w-full h-full absolute top-0 left-0 ${
                  about ? "bg-primaryDark opacity-70" : "bg-black opacity-40"
               }`}
            ></div>
         </div>
      </div>
      // <MouseParallaxContainer
      //    useWindowMouseEvents={true}
      //    className="h-full w-full"
      // >
      //    <MouseParallaxChild
      //       factorX={0.03}
      //       factorY={0.03}
      //       className="w-full h-full bg-1/2 relative"
      //       updateStyles={{
      //          transform: "scale(1.2)",
      //       }}
      //    >
      //       <Image
      //          src={src}
      //          alt={alt}
      //          layout="fill"
      //          className="object-cover w-full h-full grayscale"
      //          priority
      //       />
      //       <div className="w-full h-full bg-primary opacity-70 absolute top-0 left-0"></div>
      //    </MouseParallaxChild>
      // </MouseParallaxContainer>
   );
}
