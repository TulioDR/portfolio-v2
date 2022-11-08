import Project from "./Project";
import filmOrganizerMain from "../../assets/projects/mainInfo/filmOrganizerMain";
import pokedexMain from "../../assets/projects/mainInfo/pokedexMain";
import dashboardMain from "../../assets/projects/mainInfo/dashboardMain";

type Props = {};

export default function ProjectsShowcase({}: Props) {
   return (
      <div className="flex-1 w-full hidden sm:grid grid-cols-5 gap-4">
         <Project layout="col-span-3 row-span-1" project={filmOrganizerMain} />
         <Project layout="col-span-2 row-span-2" project={pokedexMain} />
         <Project layout="col-span-3 row-span-1" project={dashboardMain} />
      </div>
   );
}
