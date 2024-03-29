import homePage from "../../../assets/images/features/film-organizer/home-page.png";
import sidebar from "../../../assets/images/features/film-organizer/sidebar.png";
import supabase from "../../../assets/images/features/film-organizer/supabase.jpg";
import darkTheme from "../../../assets/images/features/film-organizer/dark-theme.png";
import login from "../../../assets/images/features/film-organizer/login.png";
import searchBar from "../../../assets/images/features/film-organizer/search-bar.png";

import ProjectModel from "../../../models/ProjectModel";
import filmOrganizerTech from "../../../assets/projects/technologies/filmOrganizerTech";
import filmOrganizerMain from "../../../assets/projects/mainInfo/filmOrganizerMain";

export const filmOrganizer: ProjectModel = {
   mainInfo: filmOrganizerMain,
   description: "Find and keep track of the movies and tv shows you love",
   role: "UI Design / Coding",
   date: "MAR 2022",
   overview:
      'Film Organizer it\'s a full stack MERN web application made with React functional components. The app allows you to create "Lists" in which you can save Movies or TV Shows obtained from the TMDB API. It also allows manual authentication or using an existing Google account',
   technologies: filmOrganizerTech,
   features: [
      {
         name: "Home Page",
         description:
            "Includes movies on the theater, shows on air, and upcoming movies",
         img: homePage,
      },
      {
         name: "Expandable Sidebar",
         description: "To navigate easily between pages",
         img: sidebar,
      },
      {
         name: "Search bar",
         description: "Search for movies or shows by their names",
         img: searchBar,
      },
      {
         name: "Sign In / Login",
         description: "Made with formik (you can use Google and Github!)",
         img: login,
      },
      {
         name: "Dark Theme",
         description: "Easily implemented with Tailwindcss",
         img: darkTheme,
      },
      {
         name: "Supabase",
         description:
            "It's here where users and lists are stored, connected with Prisma",
         img: supabase,
      },
   ],
};
