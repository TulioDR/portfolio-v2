import SectionTitle from "../../components/Sections/SectionTitle";
import Underline from "../../components/Sections/Underline";

type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <>
         <SectionTitle>{children}</SectionTitle>
         <Underline />
      </>
   );
}
