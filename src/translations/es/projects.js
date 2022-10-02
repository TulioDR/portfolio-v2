import filmOrganizer from "../../assets/images/projects/film-organizer.png";
import simplePokedex from "../../assets/images/projects/simple-pokedex.png";
import portfolioV1 from "../../assets/images/projects/portfolio-v1.png";

import html from "../../assets/images/technologies/html.png";
import css from "../../assets/images/technologies/css.png";
import javascript from "../../assets/images/technologies/javascript.png";
import react from "../../assets/images/technologies/react.png";
import reactRouter from "../../assets/images/technologies/react-router.png";
import redux from "../../assets/images/technologies/redux.png";
import node from "../../assets/images/technologies/node.png";
import mongodb from "../../assets/images/technologies/mongodb.png";
import express from "../../assets/images/technologies/express.png";
import tailwind from "../../assets/images/technologies/tailwind.svg";
import framerMotion from "../../assets/images/technologies/framer-motion.png";
import reactSelect from "../../assets/images/technologies/react-select.png";
import formik from "../../assets/images/technologies/formik.png";
import axios from "../../assets/images/technologies/axios.png";
import reactGoogleLogin from "../../assets/images/technologies/react-google-login.png";
import nextjs from "../../assets/images/technologies/nextjs.png";
import emailjs from "../../assets/images/technologies/emailjs.png";
import swiper from "../../assets/images/technologies/swiper.svg";

const spanishProjects = {
   "film-organizer": {
      title: "Film Organizer",
      img: filmOrganizer,
      description:
         "Encuentra y guarda las peliculas y series que más te gustan.",
      role: "Diseño de UI / Código",
      date: "",
      overview: "",
      features: [
         {
            name: "Página de Inicio",
            description:
               "Incluye películas en el cine, Shows en el aire, y películas por estrenarse",
            img: "",
         },
         {
            name: "Sidebar Ampliable",
            description: "Para navegar fácilmente entre páginas",
            img: "",
         },
         {
            name: "Search bar",
            description: "Busca películas o series por su nombre",
            img: "",
         },
         {
            name: "Sign In / Login",
            description: "Hecha con formik (puedes usar Google!)",
            img: "",
         },
         {
            name: "Tema Oscuro",
            description: "Implementado fácilmente con Tailwindcss",
            img: "",
         },
         {
            name: "MongoDB Atlas",
            description:
               "Es aquí donde los usuarios y las listas están almacenados",
            img: "",
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
            name: "Redux",
            img: redux,
            link: "https://redux.js.org/",
         },
         {
            name: "NodeJS",
            img: node,
            link: "https://nodejs.org/",
         },
         {
            name: "MongoDB",
            img: mongodb,
            link: "https://www.mongodb.com/",
         },
         {
            name: "Express",
            img: express,
            link: "https://expressjs.com/",
         },
         {
            name: "Tailwindcss",
            img: tailwind,
            link: "https://tailwindcss.com/",
         },
         {
            name: "Framer Motion",
            img: framerMotion,
            link: "https://www.framer.com/motion/",
         },
         {
            name: "Formik",
            img: formik,
            link: "https://formik.org/",
         },
         {
            name: "React-Select",
            img: reactSelect,
            link: "https://react-select.com/",
         },
         {
            name: "Axios",
            img: axios,
            link: "https://axios-http.com/",
         },
         {
            name: "React-Google-Login",
            img: reactGoogleLogin,
            link: "https://www.npmjs.com/package/react-google-login",
         },
         {
            name: "Redux Thunk",
            img: redux,
            link: "https://www.npmjs.com/package/redux-thunk",
         },
      ],
      website: "",
      repository: "",
   },
   "simple-pokedex": {
      title: "Simple Pokedex",
      img: simplePokedex,
      description:
         "Un pokédex sencilla para encontrar y aprender más sobre tus pokemones favoritos",
      role: "Diseño de UI / Código",
      date: "",
      overview: "",
      features: [
         {
            name: "Barra de Búsqueda",
            description: "Busca un pokémon por su nombre",
            img: "",
         },
         {
            name: "Selección de Orden",
            description: "Ordena la búsqueda alfabéticamente o por número",
            img: "",
         },
         {
            name: "Aleatorizar",
            description: "Obtén una lista aleatoria de Pokemones",
            img: "",
         },
         {
            name: "Detalles del Pokémon",
            description: "Descripción, altura, peso, género, evolución...",
            img: "",
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
      ],
      website: "",
      repository: "",
   },
   "portfolio-v1": {
      title: "Portfolio.v1",
      img: portfolioV1,
      description: "La primera y sencilla iteración de mi portafolio",
      role: "Diseño de UI / Código",
      date: "",
      overview: "",
      features: [
         {
            name: "Planilla de Contacto",
            description: "Implementada Fácilmente con formik y emailjs",
            img: "",
         },
         {
            name: "Exhibición de Projectos",
            description: "Hecha con Swiper.js",
            img: "",
         },
         {
            name: "Tema Oscuro",
            description: "Implementado fácilmente con Tailwindcss",
            img: "",
         },
         {
            name: "Alternancia de Idiomas",
            description: "Hecho posible con Context API de React",
            img: "",
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
      website: "",
      repository: "",
   },
};

export default spanishProjects;
