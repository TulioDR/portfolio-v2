import { useRouter } from "next/router";
import useNavbarContext from "../../context/NavbarContext";
import usePositionContext from "../../context/PositionContext";

export default function Name() {
   const { homeBullet } = usePositionContext();
   const { closeMenu } = useNavbarContext();

   const router = useRouter();
   const execute = () => {
      if (router.route === "/") homeBullet.current?.click();
      else router.push("/#home");
      closeMenu();
   };
   return (
      <div onClick={execute} className="cursor-pointer">
         Tulio Ruzo
      </div>
   );
}
