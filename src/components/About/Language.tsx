import Image from "next/image";

type Props = {
   skill: any;
};

export default function Language({ skill }: Props) {
   return (
      <article className="flex flex-col items-center rounded-md">
         <div className="relative h-8 w-8 md:h-12 md:w-12 2xl:w-16 2xl:h-16">
            <Image
               src={`/skills/${skill.img}`}
               alt={skill.name}
               layout="fill"
               className="object-contain"
            />
         </div>

         <div className="text-xs md:text-sm text-white">{skill.name}</div>
      </article>
   );
}
