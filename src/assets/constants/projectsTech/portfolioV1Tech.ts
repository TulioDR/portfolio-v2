import { TechnologiesModel } from "../../../models/ProjectModel";

import html from "../../images/technologies/html.png";
import css from "../../images/technologies/css.png";
import javascript from "../../images/technologies/javascript.png";
import tailwind from "../../images/technologies/tailwind.svg";
import formik from "../../images/technologies/formik.png";
import axios from "../../images/technologies/axios.png";
import nextjs from "../../images/technologies/nextjs.png";
import emailjs from "../../images/technologies/emailjs.png";
import swiper from "../../images/technologies/swiper.svg";

const portfolioV1Tech: TechnologiesModel[] = [
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
      name: "Tailwindcss",
      img: tailwind,
      link: "https://tailwindcss.com/",
   },
   {
      name: "Axios",
      img: axios,
      link: "https://axios-http.com/",
   },
   {
      name: "Formik",
      img: formik,
      link: "https://formik.org/",
   },
   {
      name: "EmailJS",
      img: emailjs,
      link: "https://www.emailjs.com/",
   },
   {
      name: "Swiper",
      img: swiper,
      link: "https://swiperjs.com/",
   },
];

export default portfolioV1Tech;
