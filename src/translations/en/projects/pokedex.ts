import pokedexBackground from "../../../assets/images/projects/pokedex.png";
import pokedexSearchBar from "../../../assets/images/features/pokedex/search-bar.png";
import details from "../../../assets/images/features/pokedex/details.png";
import select from "../../../assets/images/features/pokedex/select.png";
import randomize from "../../../assets/images/features/pokedex/randomize.png";

import ProjectModel from "../../../models/ProjectModel";
import pokedexTech from "../../../assets/constants/projectsTech/pokedexTech";

export const pokedex: ProjectModel = {
   link: "pokedex",
   title: "Pokédex",
   img: pokedexBackground,
   description: "A simple pokédex to find and learn more about any Pokémon",
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
         name: "Select Order",
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
   technologies: pokedexTech,
};
