import Image from "next/image";

type Props = {
   project: any;
};

// Do something with selected Pagination
export default function MobileProject({ project }: Props) {
   return (
      <article className="aspect-16/9 w-full bg-orange-800 drop-shadow-md relative">
         <div className="h-full w-full relative">
            <Image
               alt="example"
               src={project.img}
               layout="fill"
               className="object-cover"
            />
         </div>

         <div className="absolute bottom-1 right-1 flex space-x-3 text-black text-xs">
            <a
               target="_blank"
               href={project.repository}
               className="bg-white px-2 py-1 rounded-md shadow-md"
            >
               View Code
            </a>
            <a
               target="_blank"
               href={project.website}
               className="bg-white px-2 py-1 rounded-md shadow-md"
            >
               Visit Site
            </a>
         </div>
      </article>
   );
}
