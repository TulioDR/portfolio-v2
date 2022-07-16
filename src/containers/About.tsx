import SectionContainer from "../components/SectionContainer";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CardAnimation from "../animations/CardAnimation";
import Image from "next/image";
import aboutImage from "../assets/images/skills.jpg";
import Underline from "../components/Underline";

type Props = {};

export default function About({}: Props) {
   return (
      <SectionContainer index={1}>
         <div className="flex h-full space-x-10">
            <div className="space-y-10 w-2/5 flex flex-col justify-center">
               <SectionTitle>About Me</SectionTitle>
               <Underline />
               <div className="space-y-5 2xl:text-xl">
                  <div>
                     I'm a self-taught developer, that after trying some
                     javascript frameworks and libraries, I fell in love with
                     React, and by extension with one of its most popular
                     frameworks: "Next.js".
                  </div>
                  <div>
                     I'm a well-organized person, problem solver, employee with
                     high attention to detail and I speak spanish and english.
                     This is more than “just a job” for me. It is a passion that
                     motivates me to learn and improve my skills day by day,
                     either with my team or on my own.
                  </div>
               </div>
            </div>
            <motion.div
               initial={{ scale: 0.9 }}
               animate={{ scale: 1 }}
               transition={{
                  duration: 1,
                  delay: 0.4,
                  ease: "easeInOut",
               }}
               className="space-y-5 w-3/5 shadow-md h-full origin-right relative overflow-hidden bg-orange-600"
            >
               <CardAnimation />
            </motion.div>
         </div>
      </SectionContainer>
   );
}
