import { motion } from "framer-motion";

type Props = { text: string; onClick: any };

export default function RevealJumbotronBtn({ text, onClick }: Props) {
   const buttonAnimation = {
      initial: { y: "100%" },
      animate: {
         y: 0,
         transition: { duration: 0.6, ease: [0.645, 0.045, 0.355, 1] },
      },
   };

   return (
      <div className="sm:hidden overflow-hidden">
         <motion.button
            variants={buttonAnimation}
            className="bg-secondary rounded-full flex items-center w-max px-10 py-2 mx-auto"
            onClick={onClick}
         >
            <span className="text-lg">{text}</span>
         </motion.button>
      </div>
   );
}
