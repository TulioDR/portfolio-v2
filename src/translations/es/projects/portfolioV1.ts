import portfolioV1Background from "../../../assets/images/projects/portfolio-v1.png";
import contactForm from "../../../assets/images/features/portfolio-v1/contact-form.png";
import idioms from "../../../assets/images/features/portfolio-v1/idioms.png";
import projectsPortfolio from "../../../assets/images/features/portfolio-v1/projects-showcase.png";
import theme from "../../../assets/images/features/portfolio-v1/theme.png";

import ProjectModel from "../../../models/ProjectModel";
import portfolioV1Tech from "../../../assets/constants/projectsTech/portfolioV1Tech";

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
   technologies: portfolioV1Tech,
};
