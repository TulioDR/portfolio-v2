import SectionContainer from "../components/SectionContainer";
import SectionTitle from "../components/SectionTitle";

type Props = {};

export default function HomePage({}: Props) {
   return (
      <SectionContainer index={0}>
         <SectionTitle>
            <div className="mb-2">TULIO</div>
            <div>RUZO</div>
         </SectionTitle>
      </SectionContainer>
   );
}