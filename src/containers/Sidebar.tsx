import SideSelector from "../components/SideSelector";
import usePositionContext from "../context/PositionContext";

type Props = {};

export default function Sidebar({}: Props) {
   const { homeTab, aboutTab, projectsTab, contactTab } = usePositionContext();

   return (
      <div className="fixed bottom-0 left-0 md:top-0 md:h-screen w-full md:w-40 flex justify-center md:justify-start items-center z-10">
         <ul className="text-white flex md:flex-col space-x-10 md:space-x-0 md:space-y-10 md:ml-10 mb-10 md:mb-0 items-end md:items-start">
            <SideSelector page="home" index={0} tabRef={homeTab} home />
            <SideSelector page="about" index={1} tabRef={aboutTab} />
            <SideSelector page="projects" index={2} tabRef={projectsTab} />
            <SideSelector page="contact" index={3} tabRef={contactTab} />
         </ul>
      </div>
   );
}
