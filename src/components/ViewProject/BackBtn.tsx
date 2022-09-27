import { motion } from "framer-motion";
import useNavbarContext from "../../context/NavbarContext";
type Props = {
   onClick: any;
};

type SvgProps = {
   isWhiteArrow: boolean;
};
const SvgComponent = ({ isWhiteArrow }: SvgProps) => (
   <svg
      xmlns="http://www.w3.org/2000/svg"
      height={34}
      viewBox="0 0 67 34"
      style={{
         transform: "translateX(0)",
      }}
   >
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

export default function BackBtn({ onClick }: Props) {
   const { isWhiteArrow } = useNavbarContext();
   return (
      <div className="fixed top-24 left-16 z-20 overflow-hidden w-16 h-9 translate-y-3 duration-300 hover:-translate-x-2">
         <motion.button
            initial={{ x: "100%" }}
            animate={{ x: 0, transition: { duration: 0.6 } }}
            exit={{ x: "-100%", transition: { duration: 0.6 } }}
            onClick={onClick}
            className="w-full h-full relative"
         >
            <SvgComponent isWhiteArrow={isWhiteArrow} />
         </motion.button>
      </div>
   );
}
