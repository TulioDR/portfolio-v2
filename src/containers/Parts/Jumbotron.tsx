import JumbotronBackgroundImage from "../../components/Jumbotron/JumbotronBackgroundImage";
import JumbotronContainer from "../../components/Jumbotron/JumbotronContainer";
import JumbotronInnerContainer from "../../components/Jumbotron/JumbotronInnerContainer";
import { motion } from "framer-motion";
import RevealImageAnimation from "../../animations/RevealImageAnimation";

type Props = {
   children: React.ReactNode;
   imgSrc: any;
   imgAlt: any;
   reveal?: boolean;
   toggle?: any;
   about?: boolean;
};

export default function Jumbotron({
   children,
   imgSrc,
   imgAlt,
   reveal,
   toggle,
   about,
}: Props) {
   return (
      <div
         className={`w-full h-full top-0 left-0 z-20 sm:z-0 sm:w-1/2 absolute sm:static px-10 pt-24 pb-36 sm:px-0 sm:pt-0 sm:pb-0 duration-500 ${
            reveal ? "" : "translate-y-full sm:translate-y-0"
         }`}
      >
         <motion.div
            initial={{ scale: 0.85 }}
            animate={{ scale: 1 }}
            transition={{
               duration: 1.2,
               ease: "easeOut",
            }}
            className="flex flex-col w-full h-full origin-right"
         >
            <div className="w-full h-full">
               <JumbotronContainer>
                  <button
                     onClick={toggle}
                     className="bg-secondary w-8 h-8 grid place-content-center absolute right-2 top-2 z-20 rounded-full sm:hidden"
                  >
                     <span className="material-icons">close</span>
                  </button>
                  <JumbotronBackgroundImage
                     about={about}
                     src={imgSrc}
                     alt={imgAlt}
                  />
                  <JumbotronInnerContainer>{children}</JumbotronInnerContainer>
                  <RevealImageAnimation />
               </JumbotronContainer>
            </div>
         </motion.div>
      </div>
   );
}
