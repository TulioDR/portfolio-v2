import useNavbarContext from "../../context/NavbarContext";
import usePositionContext from "../../context/PositionContext";

export default function Name() {
   const { homeBullet } = usePositionContext();
   const { closeMenu } = useNavbarContext();
   const execute = () => {
      homeBullet.current?.click();
      closeMenu();
   };
   return (
      <div onClick={execute} className="cursor-pointer">
         Tulio Ruzo
      </div>
   );
}
