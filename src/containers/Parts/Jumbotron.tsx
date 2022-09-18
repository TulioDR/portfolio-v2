import JumbotronAnimation from "../../components/Sections/Jumbotron/JumbotronAnimation";
import JumbotronBackgroundImage from "../../components/Sections/Jumbotron/JumbotronBackgroundImage";
import JumbotronContainer from "../../components/Sections/Jumbotron/JumbotronContainer";
import JumbotronInnerContainer from "../../components/Sections/Jumbotron/JumbotronInnerContainer";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   imgSrc: any;
   imgAlt: any;
};

export default function Jumbotron({ children, imgSrc, imgAlt }: Props) {
   return (
      <motion.div
         initial={{ scale: 0.85 }}
         animate={{ scale: 1 }}
         transition={{
            duration: 1.2,
            delay: 0.4,
            ease: "easeOut",
         }}
         className="flex flex-col w-full h-full origin-right"
      >
         <div className="w-full h-full">
            <JumbotronContainer>
               <JumbotronBackgroundImage src={imgSrc} alt={imgAlt} />
               <JumbotronInnerContainer>{children}</JumbotronInnerContainer>
               <JumbotronAnimation />
            </JumbotronContainer>
         </div>
      </motion.div>
   );
}
