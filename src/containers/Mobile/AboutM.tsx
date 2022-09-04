import SkillsShowcase from "../../components/About/SkillsShowcase";
import SlidePrevBtn from "../../components/Sections/SlidePrevBtn";
import Jumbotron from "../Parts/Jumbotron";
import aboutImage from "../../assets/images/skills.jpg";
type Props = {};

export default function AboutM({}: Props) {
   return (
      <>
         <Jumbotron tag="table" imgSrc={aboutImage} imgAlt="about-background">
            <SkillsShowcase />
         </Jumbotron>
         <SlidePrevBtn />
      </>
   );
}
