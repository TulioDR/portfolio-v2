import { motion } from "framer-motion";
import useNavbarContext from "../../context/NavbarContext";
type Props = {
   onClick: any;
   mobile?: boolean;
};

type SvgProps = {
   isWhiteArrow: boolean;
};
const SvgComponent = ({ isWhiteArrow }: SvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" height={34} viewBox="0 0 67 34">
      <g
         fill="none"
         fillRule="evenodd"
         stroke={isWhiteArrow ? "#000" : "#FFF"}
         strokeLinecap="round"
         strokeWidth={2}
      >
         <path d="M2 16.553h64M17.556 1 2 16.556l15.556 15.555" />
      </g>
   </svg>
);

export default function BackBtn({ onClick, mobile }: Props) {
   const { isWhiteArrow } = useNavbarContext();

   const animation = {
      initial: { x: "100%" },
      animate: { x: 0, transition: { duration: 0.6 } },
      exit: { x: "-110%", transition: { duration: 0.6 } },
   };
   return (
      <div
         className={`${
            mobile ? "sm:hidden" : "hidden sm:block"
         } fixed top-20 lg:top-24 left-5 sm:left-10 md:left-16 lg:left-20 xl:left-16 z-10 overflow-hidden w-16 h-9 translate-y-3 duration-300 hover:-translate-x-2`}
      >
         <motion.button
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => onClick(mobile)}
            className="w-full h-full relative"
         >
            <SvgComponent isWhiteArrow={isWhiteArrow} />
         </motion.button>
      </div>
   );
}
