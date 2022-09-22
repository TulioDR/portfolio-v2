import { motion } from "framer-motion";

type Props = {
   values: any;
   setValues: any;
};

export default function SelectedProject({ values, setValues }: Props) {
   console.log(values);
   return (
      <motion.div
         initial={{
            width: values.width,
            height: values.height,
            x: values.x,
            y: values.y,
         }}
         animate={{
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
            transition: {
               duration: 0.4,
               ease: "easeOut",
            },
         }}
         exit={{
            width: values.width,
            height: values.height,
            x: values.x,
            y: values.y,
            transition: { duration: 0.3 },
         }}
         className="absolute top-0 left-0 z-50 brightness-50"
         onClick={() => setValues(null)}
      >
         <img
            src="/landscape2.jpg"
            alt="landscape"
            className="object-cover h-full w-full"
         />
      </motion.div>
   );
}
