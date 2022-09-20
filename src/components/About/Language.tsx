import Image from "next/image";

type Props = {
   skill: any;
};

export default function Language({ skill }: Props) {
   return (
      <article className="flex flex-col items-center rounded-md">
         <div className="relative h-10 w-10 sm:w-12 sm:h-12 2xl:w-20 2xl:h-20">
            <Image
               src={`/skills/${skill.img}`}
               alt={skill.name}
               layout="fill"
               className="object-contain"
            />
         </div>

         <div className="text-xs md:text-sm lg:text-base text-white">
            {skill.name}
         </div>
      </article>
   );
}
