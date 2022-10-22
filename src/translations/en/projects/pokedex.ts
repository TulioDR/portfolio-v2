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
   description: "A simple pokédex to find and learn more about any Pokémons",
   website: "https://pokedex-animated.vercel.app/",
   repository: "https://github.com/TulioDR/pokedex",
   role: "UI Design / Coding",
   date: "DEC 2021",
   overview:
      "Simple Pokédex is a web application with a simple UI made with the PokéAPI that allows you to find pokemons and learn about them.",
   features: [
      {
         name: "Search Bar",
         description: "Search for a pokémon by it's name",
         img: pokedexSearchBar,
      },
      {
         name: "Order Bar",
         description: "Order the search alphabetically o by number",
         img: select,
      },
      {
         name: "Randomize",
         description: "Obtain a random list of pokemons",
         img: randomize,
      },
      {
         name: "Pokémon Details",
         description: "Description, height, weight, gender, evolution...",
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
