import filmOrganizerBackground from "../../../assets/images/projects/film-organizer.png";
import homePage from "../../../assets/images/features/film-organizer/home-page.png";
import sidebar from "../../../assets/images/features/film-organizer/sidebar.png";
import mongoAtlas from "../../../assets/images/features/film-organizer/atlas.jpg";
import darkTheme from "../../../assets/images/features/film-organizer/dark-theme.png";
import listManager from "../../../assets/images/features/film-organizer/manager.png";
import login from "../../../assets/images/features/film-organizer/login.png";
import searchBar from "../../../assets/images/features/film-organizer/search-bar.png";

// Technologies
import html from "../../../assets/images/technologies/html.png";
import css from "../../../assets/images/technologies/css.png";
import javascript from "../../../assets/images/technologies/javascript.png";
import react from "../../../assets/images/technologies/react.png";
import reactRouter from "../../../assets/images/technologies/react-router.png";
import redux from "../../../assets/images/technologies/redux.png";
import node from "../../../assets/images/technologies/node.png";
import mongodb from "../../../assets/images/technologies/mongodb.png";
import express from "../../../assets/images/technologies/express.png";
import tailwind from "../../../assets/images/technologies/tailwind.svg";
import framerMotion from "../../../assets/images/technologies/framer-motion.png";
import reactSelect from "../../../assets/images/technologies/react-select.png";
import formik from "../../../assets/images/technologies/formik.png";
import axios from "../../../assets/images/technologies/axios.png";
import reactGoogleLogin from "../../../assets/images/technologies/react-google-login.png";

import ProjectModel from "../../../models/ProjectModel";

export const filmOrganizer: ProjectModel = {
   link: "film-organizer",
   title: "Film Organizer",
   img: filmOrganizerBackground,
   description: "Encuentra y guarda las peliculas y series que más te gustan.",
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
         img: homePage,
      },
      {
         name: "Sidebar Ampliable",
         description: "Para navegar fácilmente entre páginas",
         img: sidebar,
      },
      {
         name: "Search bar",
         description: "Busca películas o series por su nombre",
         img: searchBar,
      },
      {
         name: "Sign In / Login",
         description: "Hecha con formik (puedes usar Google!)",
         img: login,
      },
      {
         name: "Gestor de Listas",
         description: "Modifica, borra o mantente al tanto de tus listas",
         img: listManager,
      },
      {
         name: "Tema Oscuro",
         description: "Implementado fácilmente con Tailwindcss",
         img: darkTheme,
      },
      {
         name: "MongoDB Atlas",
         description:
            "Es aquí donde los usuarios y las listas están almacenados, conectado con nodejs",
         img: mongoAtlas,
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
};
