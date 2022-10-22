import simplePokedex from "../../../assets/images/projects/simple-pokedex.png";
import pokedexSearchBar from "../../../assets/images/features/simple-pokedex/search-bar.png";
import details from "../../../assets/images/features/simple-pokedex/details.png";
import select from "../../../assets/images/features/simple-pokedex/select.png";
import randomize from "../../../assets/images/features/simple-pokedex/randomize.png";

// Technologies
import html from "../../../assets/images/technologies/html.png";
import css from "../../../assets/images/technologies/css.png";
import javascript from "../../../assets/images/technologies/javascript.png";
import react from "../../../assets/images/technologies/react.png";
import reactRouter from "../../../assets/images/technologies/react-router.png";
import tailwind from "../../../assets/images/technologies/tailwind.svg";

import ProjectModel from "../../../models/ProjectModel";

export const pokedex: ProjectModel = {
   link: "pokedex",
   title: "Pokédex",
   img: simplePokedex,
   description:
      "Un pokédex sencilla para encontrar y aprender más sobre cualquier pokémon",
   website: "https://pokedex-animated.vercel.app/",
   repository: "https://github.com/TulioDR/pokedex",
   role: "Diseño de UI / Código",
   date: "DIC 2021",
   overview:
      "Simple Pokédex es una aplicación web de simple interfaz hecha con PokéApi que permite encontrar pokemones y aprender de ellos.",
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
};
