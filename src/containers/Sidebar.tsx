import SideContainer from "../components/Sidebar/SideContainer";
import SidePagination from "../components/Sidebar/SidePagination";
import usePositionContext from "../context/PositionContext";

export default function Sidebar() {
   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();
   return (
      <SideContainer>
         <SidePagination index={0} bulletRef={homeBullet} />
         <SidePagination index={1} bulletRef={aboutBullet} />
         <SidePagination index={2} bulletRef={projectsBullet} />
         <SidePagination index={3} bulletRef={contactBullet} />
      </SideContainer>
   );
}
