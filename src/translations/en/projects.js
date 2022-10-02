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

const englishProjects = {
   "film-organizer": {
      title: "Film Organizer",
      img: filmOrganizer,
      description: "Find and keep track of the movies and tv shows you love",
      website: "https://film-organizer.netlify.app/home",
      repository: "https://github.com/TulioDR/Film-Organizer",
      role: "UI Design / Coding",
      date: "JUNE 2022",
      overview:
         'Film Organizer it\'s a full stack MERN web application made with React functional components. The app allows you to create "Lists" in which you can save Movies or TV Shows obtained from the TMDB API. It also allows manual authentication or using an existing Google account',
      features: [
         {
            name: "Home Page",
            description:
               "Includes movies on the theater, shows on air, and upcoming movies",
            img: "",
         },
         {
            name: "Expandable Sidebar",
            description: "To navigate easily between pages",
            img: "",
         },
         {
            name: "Search bar",
            description: "Search for movies or shows by their names",
            img: "",
         },
         {
            name: "Sign In / Login",
            description: "Made with formik (you can use Google!)",
            img: "",
         },
         {
            name: "Dark Theme",
            description: "Easily implemented with Tailwindcss",
            img: "",
         },
         {
            name: "MongoDB Atlas",
            description: "It's here where users and lists are stored",
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
      description: "A simple pokédex to find and learn more about any Pokémons",
      website: "https://simple-pokedex-app.netlify.app/pokedex/",
      repository: "https://github.com/TulioDR/Simple-Pokedex",
      role: "UI Design / Coding",
      date: "DEC 2021",
      overview:
         "Simple Pokédex is a web application with a simple UI made with the PokéAPI that allows you to find pokemons and learn about them.",
      features: [
         {
            name: "Search Bar",
            description: "Search for a pokémon by it's name",
            img: "",
         },
         {
            name: "Order Bar",
            description: "Order the search alphabetically o by number",
            img: "",
         },
         {
            name: "Randomize",
            description: "Obtain a random list of pokemons",
            img: "",
         },
         {
            name: "Pokémon Details",
            description: "Description, height, weight, gender, evolution...",
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
   },
   "portfolio-v1": {
      title: "Portfolio.v1",
      img: portfolioV1,
      description: "The first and simple iteration or my portfolio",
      website: "https://tulioruzov1.vercel.app",
      repository: "https://github.com/TulioDR/portfolio",
      role: "UI Design / Coding",
      date: "FEB 2022",
      overview: "A simple portfolio made to show my projects and skills",
      features: [
         {
            name: "Contact Form",
            description: "Easily implemented with formik and emailjs",
            img: "",
         },
         {
            name: "Projects Showcase",
            description: "Made with Swiper.js",
            img: "",
         },
         {
            name: "Dark Theme",
            description: "Easily implemented with Tailwindcss",
            img: "",
         },
         {
            name: "Alternate between languages",
            description: "Made possible with React Context API",
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
   },
};

export default englishProjects;
