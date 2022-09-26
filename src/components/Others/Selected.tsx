import useRouteContext from "../../context/RouteContext";
import SelectedProject from "../Projects/SelectedProject";

type Props = {};

export default function Selected({}: Props) {
   const { forwardAnimation, backAnimation } = useRouteContext();

   return (
      <>
         <SelectedProject reveal={forwardAnimation} />
         <SelectedProject reveal={backAnimation} back />
      </>
   );
}
