import SectionContainer from "../components/SectionContainer";
import { AnimatePresence, motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import CardAnimation from "../animations/CardAnimation";
import Image from "next/image";
import aboutImage from "../assets/images/skills.jpg";
import Underline from "../components/Underline";
import { useState } from "react";
import DescriptionContainer from "../components/DescriptionContainer";

type Props = {};

export default function About({}: Props) {
   const [showMainSkills, setShowMainSkills] = useState<Boolean>(true);

   return (
      <SectionContainer index={1}>
         <DescriptionContainer>
            <SectionTitle>About Me</SectionTitle>
            <Underline />
            <div className="space-y-5 text-xs lg:text-sm xl:text-base 2xl:text-lg w-5/6">
               <div>
                  I'm a self-taught developer, that after trying some javascript
                  frameworks and libraries, I fell in love with React, and by
                  extension with its most popular frameworks: "Next.js".
               </div>
               <div>
                  I'm a well-organized person, problem solver, employee with
                  high attention to detail and I speak spanish and english. This
                  is more than “just a job” for me. It is a passion that
                  motivates me to learn and improve my skills day by day, either
                  with my team or on my own.
               </div>
            </div>
         </DescriptionContainer>
         <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
               duration: 1,
               delay: 0.4,
               ease: "easeInOut",
            }}
            className="w-3/5 shadow-md h-full origin-right relative overflow-hidden"
         >
            <Image
               src={aboutImage}
               alt="about"
               layout="fill"
               className="object-cover"
            />
            <div className="bg-orange-600 bg-opacity-60 top-0 left-0 w-full h-full absolute"></div>
            <CardAnimation />
            <div className="absolute space-y-5 w-full h-full grid place-content-center">
               <div className="mx-auto">
                  <div className="flex space-x-5">
                     <div onClick={() => setShowMainSkills(true)}>
                        Main Skills
                     </div>
                     <div onClick={() => setShowMainSkills(false)}>
                        Other Skills
                     </div>
                  </div>
                  <div className="flex relative overflow-hidden">
                     <motion.div
                        animate={{ x: showMainSkills ? 0 : "-100%" }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-4 gap-3 min-w-max bg-blue-600"
                     >
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                     </motion.div>
                     <motion.div
                        animate={{ x: showMainSkills ? "100%" : 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-4 gap-3 min-w-max bg-red-600 absolute top-0 left-0"
                     >
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                        <div className="bg-slate-900 h-20 w-20"></div>
                     </motion.div>
                  </div>
               </div>
            </div>
         </motion.div>
      </SectionContainer>
   );
}
