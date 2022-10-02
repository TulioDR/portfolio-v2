import TechnologyCard from "../TechnologyCard";

type Props = { technologies?: any };

export default function Layout6({ technologies }: Props) {
   return (
      <div className="hidden sm:flex flex-col space-y-5 ">
         <div className="grid grid-cols-3 gap-5 w-full">
            <TechnologyCard technology={technologies[0]} />
            <TechnologyCard technology={technologies[1]} />
            <TechnologyCard technology={technologies[2]} />
         </div>
         <div className="grid grid-cols-2 gap-5 w-2/3 mx-auto">
            <TechnologyCard technology={technologies[3]} />
            <TechnologyCard technology={technologies[4]} />
         </div>
         <div className="grid grid-cols-1 gap-5 w-1/3 mx-auto">
            <TechnologyCard technology={technologies[5]} />
         </div>
      </div>
   );
}
