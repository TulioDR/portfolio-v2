import Image from "next/image";

type Props = {
   skill: any;
};

export default function Language({ skill }: Props) {
   return (
      <article className="flex flex-col items-center bg-gray-200 rounded-md pt-2 pb-1 px-1">
         <Image
            src={`/skills/${skill.img}`}
            alt={skill.name}
            width={56}
            height={56}
            className="object-contain"
         />
         <div className="text-sm text-black">{skill.name}</div>
      </article>
   );
}
