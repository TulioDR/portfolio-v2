import SectionContainer from "../../components/Sections/SectionContainer";
import AboutD from "../Desktop/AboutD";
import AboutM from "../Mobile/AboutM";

type Props = {};

export default function About({}: Props) {
   return (
      <SectionContainer desktop={<AboutD />} mobile={<AboutM />} index={1} />
   );
}
