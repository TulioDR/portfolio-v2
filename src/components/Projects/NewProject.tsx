import JumbotronAnimation from "../Sections/Jumbotron/JumbotronAnimation";

type Props = {
   lg?: boolean;
};

export default function NewProject({ lg }: Props) {
   return (
      <div
         className={`bg-blue-900 relative overflow-hidden ${
            lg ? "col-span-2" : ""
         }`}
      >
         <JumbotronAnimation />
      </div>
   );
}
