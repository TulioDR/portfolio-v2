import useNavbarContext from "../../context/NavbarContext";
import usePositionContext from "../../context/PositionContext";
import TagContainer from "../Sections/TagContainer";

export default function Name() {
   const { homeBullet } = usePositionContext();
   const { closeMenu } = useNavbarContext();
   const execute = () => {
      homeBullet.current?.click();
      closeMenu();
   };
   return (
      <TagContainer tag="nav">
         <div onClick={execute} className="cursor-pointer">
            Tulio Ruzo
         </div>
      </TagContainer>
   );
}
