import pokedexSearchBar from "../../../assets/images/features/pokedex/search-bar.png";
import details from "../../../assets/images/features/pokedex/details.png";
import select from "../../../assets/images/features/pokedex/select.png";
import randomize from "../../../assets/images/features/pokedex/randomize.png";

import ProjectModel from "../../../models/ProjectModel";
import pokedexTech from "../../../assets/projects/technologies/pokedexTech";
import pokedexMain from "../../../assets/projects/mainInfo/pokedexMain";

export const pokedex: ProjectModel = {
   mainInfo: pokedexMain,
   description:
      "Un pokédex sencilla para encontrar y aprender más sobre cualquier pokémon",
   role: "Diseño de UI / Código",
   date: "JUL 2022",
   overview:
      "Simple Pokédex es una aplicación web de simple interfaz hecha con PokéApi que permite encontrar pokemones y aprender de ellos.",
   technologies: pokedexTech,
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
};
