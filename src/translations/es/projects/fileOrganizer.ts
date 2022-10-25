import filmOrganizerBackground from "../../../assets/images/projects/film-organizer.png";
import homePage from "../../../assets/images/features/film-organizer/home-page.png";
import sidebar from "../../../assets/images/features/film-organizer/sidebar.png";
import mongoAtlas from "../../../assets/images/features/film-organizer/atlas.jpg";
import darkTheme from "../../../assets/images/features/film-organizer/dark-theme.png";
import listManager from "../../../assets/images/features/film-organizer/manager.png";
import login from "../../../assets/images/features/film-organizer/login.png";
import searchBar from "../../../assets/images/features/film-organizer/search-bar.png";

import ProjectModel from "../../../models/ProjectModel";
import filmOrganizerTech from "../../../assets/constants/projectsTech/filmOrganizerTech";

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
   technologies: filmOrganizerTech,
};
