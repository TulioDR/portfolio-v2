import html from "../images/technologies/html.png";
import css from "../images/technologies/css.png";
import javascript from "../images/technologies/javascript.png";
import sass from "../images/technologies/sass.png";
import tailwind from "../images/technologies/tailwind.svg";
import typescript from "../images/technologies/typescript.png";
import react from "../images/technologies/react.png";
import reactRouter from "../images/technologies/react-router.png";
import redux from "../images/technologies/redux.png";
import git from "../images/technologies/git.png";

import SkillModel from "../../models/SkillModel";

const mainSkillsList: SkillModel[] = [
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
      name: "Sass",
      img: sass,
      link: "https://sass-lang.com/",
   },
   {
      name: "Tailwind",
      img: tailwind,
      link: "https://tailwindcss.com/",
   },
   {
      name: "Typescript",
      img: typescript,
      link: "https://www.typescriptlang.org/",
   },
   {
      name: "React",
      img: react,
      link: "https://reactjs.org/",
   },
   {
      name: "React Router",
      img: reactRouter,
      link: "https://reactrouter.com/",
   },
   {
      name: "Redux",
      img: redux,
      link: "https://redux.js.org/",
   },
   {
      name: "Git",
      img: git,
      link: "https://git-scm.com/",
   },
];

export default mainSkillsList;
