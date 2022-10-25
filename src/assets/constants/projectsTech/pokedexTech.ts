import html from "../../images/technologies/html.png";
import css from "../../images/technologies/css.png";
import javascript from "../../images/technologies/javascript.png";
import framerMotion from "../../images/technologies/framer-motion.png";
import tailwind from "../../images/technologies/tailwind.svg";
import nextjs from "../../images/technologies/nextjs.png";
import typescript from "../../images/technologies/typescript.png";

import { TechnologiesModel } from "../../../models/ProjectModel";

const pokedexTech: TechnologiesModel[] = [
   {
      name: "HTML",
      img: html,
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
   },
   {
      name: "CSS",
      img: css,
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
   },
   {
      name: "Javascript",
      img: javascript,
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
   },
   {
      name: "Next.js",
      img: nextjs,
      link: "https://nextjs.org/",
   },
   {
      name: "Framer Motion",
      img: framerMotion,
      link: "https://reactjs.org/",
   },
   {
      name: "Tailwindcss",
      img: tailwind,
      link: "https://tailwindcss.com/",
   },
   {
      name: "Typescript",
      img: typescript,
      link: "https://www.typescriptlang.org/",
   },
];

export default pokedexTech;
