import Image from "next/image";

type Props = {
   src: any;
   alt: string;
};

export default function CardImage({ src, alt }: Props) {
   return (
      <>
         <Image src={src} alt={alt} layout="fill" className="object-cover" />
         <div className="w-full h-full bg-orange-600 bg-opacity-50 absolute top-0 left-0"></div>
      </>
   );
}
