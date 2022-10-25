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
   description: "The first and simple iteration or my portfolio",
   website: "https://tulioruzov1.vercel.app",
   repository: "https://github.com/TulioDR/portfolio",
   role: "UI Design / Coding",
   date: "FEB 2022",
   overview: "A simple portfolio made to show my projects and skills",
   features: [
      {
         name: "Projects Showcase",
         description: "Made with Swiper.js",
         img: projectsPortfolio,
      },
      {
         name: "Dark/Light Theme",
         description: "Easily implemented with Tailwindcss",
         img: theme,
      },
      {
         name: "Alternate between languages",
         description: "Made possible with React Context API",
         img: idioms,
      },
      {
         name: "Contact Form",
         description: "Easily implemented with formik and emailjs",
         img: contactForm,
      },
   ],
   technologies: portfolioV1Tech,
};
