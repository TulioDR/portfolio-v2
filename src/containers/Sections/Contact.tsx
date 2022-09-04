import SectionContainer from "../../components/Sections/SectionContainer";
import ContactD from "../Desktop/ContactD";
import ContactM from "../Mobile/ContactM";

export default function Contact() {
   return (
      <SectionContainer
         desktop={<ContactD />}
         mobile={<ContactM />}
         index={3}
      />
   );
}
