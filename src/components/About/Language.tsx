import Image from "next/image";
import SkillModel from "../../models/SkillModel";

type Props = {
   skill: SkillModel;
};

export default function Language({ skill }: Props) {
   return (
      <article className="flex cursor-pointer group flex-col items-center pt-1">
         <div className="relative h-10 w-10 sm:w-12 sm:h-12 2xl:w-20 2xl:h-20 group-hover:scale-110 duration-300">
            <Image
               src={skill.img}
               alt={skill.name}
               layout="fill"
               className="object-contain"
               priority
            />
         </div>

         <div className="text-xs md:text-sm">{skill.name}</div>
      </article>
   );
}
