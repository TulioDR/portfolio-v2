import SectionTitle from "./SectionTitle";
import TagContainer from "./TagContainer";
import Underline from "./Underline";

type Props = {
   title: string;
};

export default function Title({ title }: Props) {
   return (
      <TagContainer tag="h2">
         <SectionTitle>{title}</SectionTitle>
         <Underline />
      </TagContainer>
   );
}
