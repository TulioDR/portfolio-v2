import { AnimatePresence, motion } from "framer-motion";

type Props = { name: string; errors: any; touched: any; textarea: boolean };

export default function ErrorMessage({
   errors,
   touched,
   textarea,
   name,
}: Props) {
   const container = {
      initial: { x: "150%", opacity: 0, bottom: 2 },
      animate: {
         x: "100%",
         opacity: 1,
         transition: {
            duration: 0.7,
         },
      },
      exit: {
         x: "150%",
         opacity: 0,
         transition: {
            duration: 0.7,
         },
      },
   };

   const message1 = {
      initial: {
         y: "100%",
      },
      animate: {
         y: 0,
         transition: {
            duration: 0.5,
            delay: 1.5,
         },
      },
   };
   const message2 = {
      initial: {
         opacity: 0,
         y: "100%",
      },
      animate: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.5,
            delay: 1.5,
         },
      },
   };

   return (
      <AnimatePresence>
         {touched[name] && errors[name] && (
            <motion.div
               variants={container}
               initial="initial"
               animate="animate"
               exit="exit"
               className="absolute right-0 text-red-300 min-w-max"
            >
               {textarea ? (
                  <>
                     <motion.div variants={message1}>
                        {errors[name].message1}
                     </motion.div>
                     <motion.div variants={message2}>
                        {errors[name].message2}
                     </motion.div>
                  </>
               ) : (
                  errors[name]
               )}
            </motion.div>
         )}
      </AnimatePresence>
   );
}
