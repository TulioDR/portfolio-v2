import Image from "next/image";
import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

import landscape from "../../assets/images/landscape2.jpg";
import JumbotronAnimation from "../Sections/Jumbotron/JumbotronAnimation";
import { motion } from "framer-motion";
import { useRef } from "react";

type Props = {
   lg?: string;
   setValues: any;
};

export default function NewProject({ lg, setValues }: Props) {
   const project = useRef(null);

   const saveNewValues = () => {
      setValues({
         width: project.current.clientWidth,
         height: project.current.clientHeight,
         x: project.current.offsetLeft,
         y: project.current.offsetTop,
      });
   };

   return (
      <div
         ref={project}
         className={`relative overflow-hidden ${lg}`}
         onClick={saveNewValues}
      >
         <MouseParallaxContainer enabled={false} className="h-full w-full">
            <MouseParallaxChild
               factorX={0.03}
               factorY={0.03}
               className="w-full h-full bg-1/2 relative border border-primary"
            >
               <Image
                  src={landscape}
                  alt="landscape"
                  layout="fill"
                  className="object-cover w-full brightness-50"
                  priority
               />
            </MouseParallaxChild>
         </MouseParallaxContainer>
         <JumbotronAnimation />
      </div>
   );
}
