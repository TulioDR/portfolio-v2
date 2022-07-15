import SectionContainer from "../components/SectionContainer";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CardAnimation from "../animations/CardAnimation";

type Props = {};

export default function About({}: Props) {
   return (
      <SectionContainer index={1}>
         <SectionTitle>About Me</SectionTitle>
         <div className="flex space-x-10">
            <motion.div
               initial={{ x: "-100%" }}
               animate={{ x: 0 }}
               transition={{
                  duration: 0.8,
                  delay: 0.8,
                  ease: "easeInOut",
               }}
               className="mt-10 space-y-5 w-2/5"
            >
               <div>
                  I'm a self-taught developer, that after trying some javascript
                  frameworks and libraries, I fell in love with React, and by
                  extension with one of its most popular frameworks: "Next.js".
               </div>
               <div>
                  I'm a well-organized person, problem solver, employee with
                  high attention to detail and I speak spanish and english. This
                  is more than “just a job” for me. It is a passion that
                  motivates me to learn and improve my skills day by day, either
                  with my team or on my own.
               </div>
            </motion.div>
            <motion.div
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeInOut",
               }}
               className="mt-10 space-y-5 w-3/5 shadow-md h-60 origin-right relative overflow-hidden"
            >
               <CardAnimation />
            </motion.div>
         </div>
      </SectionContainer>
   );
}
