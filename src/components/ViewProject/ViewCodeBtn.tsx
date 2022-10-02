import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
   children: React.ReactNode;
   mobile?: boolean;
   onClick: any;
};

export default function ViewCodeBtn({ children, mobile, onClick }: Props) {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const toggle = () => setIsOpen(!isOpen);

   const buttonAnimation = {
      initial: { y: "100%", opacity: 0 },
      animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
      exit: { y: "100%", opacity: 0, transition: { duration: 0.6 } },
   };
   const mobileButtonAnimation = {
      initial: { y: "100%", opacity: 0 },
      animate: {
         y: 0,
         opacity: 1,
         width: isOpen ? 176 : 56,
         transition: { duration: 0.3 },
      },
      exit: { y: "100%", opacity: 0, transition: { duration: 0.6 } },
   };
   return (
      <motion.button
         variants={mobile ? mobileButtonAnimation : buttonAnimation}
         initial="initial"
         animate="animate"
         exit="exit"
         whileHover={
            mobile ? undefined : { width: 176, transition: { duration: 0.3 } }
         }
         className={`rounded-lg bg-secondary absolute bottom-5 right-5 sm:bottom-10 sm:right-10 md:right-16 md:bottom-16 lg:bottom-20 lg:right-20 xl:right-16 xl:bottom-16 w-14 h-14 group justify-end overflow-hidden ${
            mobile ? "flex lg:hidden" : "hidden lg:flex"
         }`}
         onClick={mobile ? undefined : onClick}
      >
         <div className="flex items-center h-full w-44">
            <span
               onClick={mobile ? onClick : undefined}
               className="h-12 w-[7.5rem] grid place-content-center pl-2 md:text-lg"
            >
               {children}
            </span>
            <span
               onClick={mobile ? toggle : undefined}
               className={`duration-300 text-3xl material-icons w-14 h-full grid place-content-center ${
                  mobile
                     ? isOpen
                        ? "rotate-180"
                        : ""
                     : "group-hover:rotate-180"
               }`}
            >
               {mobile ? (isOpen ? "close" : "code") : "code"}
            </span>
         </div>
      </motion.button>
   );
}
