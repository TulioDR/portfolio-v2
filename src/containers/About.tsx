import SectionContainer from "../components/SectionContainer";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

type Props = {};

export default function About({}: Props) {
   return (
      <SectionContainer index={1}>
         <SectionTitle>About Me</SectionTitle>
         <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{
               duration: 0.6,
               delay: 0.8,
               ease: "easeInOut",
            }}
            className="text-4xl mt-10"
         >
            Hello
         </motion.div>
      </SectionContainer>
   );
}
