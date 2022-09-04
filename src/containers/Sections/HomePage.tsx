import SectionContainer from "../../components/Sections/SectionContainer";
import HomeD from "../Desktop/HomeD";

type Props = {};

export default function HomePage({}: Props) {
   return <SectionContainer desktop={<HomeD />} home index={0} />;
}
