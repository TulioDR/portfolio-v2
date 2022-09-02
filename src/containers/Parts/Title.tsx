import SectionTitle from "../../components/Sections/SectionTitle";
import TagContainer from "../../components/Sections/TagContainer";
import Underline from "../../components/Sections/Underline";

type Props = {
   children: React.ReactNode;
};

export default function Title({ children }: Props) {
   return (
      <TagContainer tag="h2">
         <SectionTitle>{children}</SectionTitle>
         <Underline />
      </TagContainer>
   );
}
