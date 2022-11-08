import { TechnologiesModel } from "../../../models/ProjectModel";

import html from "../../images/technologies/html.png";
import css from "../../images/technologies/css.png";
import javascript from "../../images/technologies/javascript.png";
import tailwind from "../../images/technologies/tailwind.svg";
import syncfusion from "../../images/technologies/syncfusion.png";
import reactRouter from "../../images/technologies/react-router.png";
import react from "../../images/technologies/react.png";
import typescript from "../../images/technologies/typescript.png";
import reactIcons from "../../images/technologies/react-icons.svg";

const dashboardTech: TechnologiesModel[] = [
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
      name: "React",
      img: react,
      link: "https://reactjs.org/",
   },
   {
      name: "React-Router-Dom",
      img: reactRouter,
      link: "https://reactrouter.com/",
   },
   {
      name: "Tailwindcss",
      img: tailwind,
      link: "https://tailwindcss.com/",
   },
   {
      name: "Syncfusion",
      img: syncfusion,
      link: "https://www.syncfusion.com/",
   },
   {
      name: "Typescript",
      img: typescript,
      link: "https://www.typescriptlang.org/",
   },
   {
      name: "React-Icons",
      img: reactIcons,
      link: "https://react-icons.github.io/react-icons/",
   },
];

export default dashboardTech;
