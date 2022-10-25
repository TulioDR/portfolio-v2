import simplePokedex from "../../../assets/images/projects/simple-pokedex.png";
import pokedexSearchBar from "../../../assets/images/features/simple-pokedex/search-bar.png";
import details from "../../../assets/images/features/simple-pokedex/details.png";
import select from "../../../assets/images/features/simple-pokedex/select.png";
import randomize from "../../../assets/images/features/simple-pokedex/randomize.png";

import ProjectModel from "../../../models/ProjectModel";
import pokedexTech from "../../../assets/constants/projectsTech/pokedexTech";

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
   technologies: pokedexTech,
};
