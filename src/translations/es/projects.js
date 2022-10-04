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

// Film Organizer
import mongoAtlas from "../../assets/images/features/film-organizer/atlas.jpg";
import darkTheme from "../../assets/images/features/film-organizer/dark-theme.png";
import listManager from "../../assets/images/features/film-organizer/manager.png";
import login from "../../assets/images/features/film-organizer/login.png";
import searchBar from "../../assets/images/features/film-organizer/search-bar.png";
import homePage from "../../assets/images/features/film-organizer/home-page.png";
import sidebar from "../../assets/images/features/film-organizer/sidebar.png";

// Simple Pokedex
import pokedexSearchBar from "../../assets/images/features/simple-pokedex/search-bar.png";
import details from "../../assets/images/features/simple-pokedex/details.png";
import select from "../../assets/images/features/simple-pokedex/select.png";
import randomize from "../../assets/images/features/simple-pokedex/randomize.png";

// Portfolio v1
import contactForm from "../../assets/images/features/portfolio-v1/contact-form.png";
import idioms from "../../assets/images/features/portfolio-v1/idioms.png";
import projectsPortfolio from "../../assets/images/features/portfolio-v1/projects-showcase.png";
import theme from "../../assets/images/features/portfolio-v1/theme.png";

const spanishProjects = {
   "film-organizer": {
      title: "Film Organizer",
      img: filmOrganizer,
      description:
         "Encuentra y guarda las peliculas y series que más te gustan.",
      website: "https://film-organizer.netlify.app/home",
      repository: "https://github.com/TulioDR/Film-Organizer",
      role: "Diseño de UI / Código",
      date: "JUN 2022",
      overview:
         'Film Organizer es una aplicación MERN full stack hecha con compenentes funcionales en React. La aplicación te permite crear "Listas" en las cuales puedes guardar Películas o Series de TV las obtenidas por medio de la TMDB API. También permite autenticación manual o usando una cuenta existente de Google.',
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
            name: "Gestor de Listas",
            description: "Modifica, borra o mantente al tanto de tus listas",
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
               "Es aquí donde los usuarios y las listas están almacenados, conectado con nodejs",
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
   },
   "simple-pokedex": {
      title: "Simple Pokedex",
      img: simplePokedex,
      description:
         "Un pokédex sencilla para encontrar y aprender más sobre cualquier pokémon",
      website: "https://simple-pokedex-app.netlify.app/pokedex/",
      repository: "https://github.com/TulioDR/Simple-Pokedex",
      role: "Diseño de UI / Código",
      date: "DIC 2021",
      overview:
         "Simple Pokédex es una aplicación web de simple interfaz hecha con la PokéApi que permite encontrar pokemones y aprender de ellos.",
      features: [
         {
            name: "Barra de Búsqueda",
            description: "Busca un pokémon por su nombre",
            img: pokedexSearchBar,
         },
         {
            name: "Selección de Orden",
            description: "Ordena la búsqueda alfabéticamente o por número",
            img: select,
         },
         {
            name: "Aleatorizar",
            description: "Obtén una lista aleatoria de Pokemones",
            img: randomize,
         },
         {
            name: "Detalles del Pokémon",
            description: "Descripción, altura, peso, género, evolución...",
            img: details,
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
   },
   "portfolio-v1": {
      title: "Portfolio.v1",
      img: portfolioV1,
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
   },
};

export default spanishProjects;
