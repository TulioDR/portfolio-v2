import DescriptionContainer from "../components/DescriptionContainer";
import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";
import Underline from "../components/Underline";

type Props = {
   currentIndex: number;
};

export default function HomePage({ currentIndex }: Props) {
   return (
      <SectionContainer currentIndex={currentIndex} index={0}>
         <DescriptionContainer>
            <SectionTitle>
               <div className="mb-2">TULIO</div>
               <div>RUZO</div>
            </SectionTitle>
            <Underline />
            <div className="text-3xl">Web Developer</div>
         </DescriptionContainer>
      </SectionContainer>
   );
}
