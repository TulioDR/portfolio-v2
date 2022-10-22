import portfolioV1Background from "../../../assets/images/projects/portfolio-v1.png";
import contactForm from "../../../assets/images/features/portfolio-v1/contact-form.png";
import idioms from "../../../assets/images/features/portfolio-v1/idioms.png";
import projectsPortfolio from "../../../assets/images/features/portfolio-v1/projects-showcase.png";
import theme from "../../../assets/images/features/portfolio-v1/theme.png";

// Technologies
import html from "../../../assets/images/technologies/html.png";
import css from "../../../assets/images/technologies/css.png";
import javascript from "../../../assets/images/technologies/javascript.png";
import tailwind from "../../../assets/images/technologies/tailwind.svg";
import formik from "../../../assets/images/technologies/formik.png";
import axios from "../../../assets/images/technologies/axios.png";
import nextjs from "../../../assets/images/technologies/nextjs.png";
import emailjs from "../../../assets/images/technologies/emailjs.png";
import swiper from "../../../assets/images/technologies/swiper.svg";

import ProjectModel from "../../../models/ProjectModel";

export const portfolioV1: ProjectModel = {
   link: "portfolio-v1",
   title: "Portfolio.v1",
   img: portfolioV1Background,
   description: "La primera y sencilla iteración de mi portafolio",
   website: "https://tulioruzov1.vercel.app",
   repository: "https://github.com/TulioDR/portfolio",
   role: "Diseño de UI / Código",
   date: "FEB 2022",
   overview:
      "Un portafolio sencillo y organizado para mostrar mis proyectos y habilidades",
   features: [
      {
         name: "Exhibición de Projectos",
         description: "Hecha con Swiper.js",
         img: projectsPortfolio,
      },
      {
         name: "Tema Claro/Oscuro",
         description: "Implementado fácilmente con Tailwindcss",
         img: theme,
      },
      {
         name: "Alternancia de Idiomas",
         description: "Hecho posible con Context API de React",
         img: idioms,
      },
      {
         name: "Planilla de Contacto",
         description: "Implementada Fácilmente con formik y emailjs",
         img: contactForm,
      },
   ],
   technologies: [
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
   ],
};
