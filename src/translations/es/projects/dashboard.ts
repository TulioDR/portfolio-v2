import ProjectModel from "../../../models/ProjectModel";
import dashboardTech from "../../../assets/projects/technologies/dashboardTech";
import dashboardMain from "../../../assets/projects/mainInfo/dashboardMain";

import sidebar from "../../../assets/images/features/dashboard/sidebar.png";
import theme from "../../../assets/images/features/dashboard/theme.png";
import notifications from "../../../assets/images/features/dashboard/notifications.png";
import cart from "../../../assets/images/features/dashboard/cart.png";
import chat from "../../../assets/images/features/dashboard/chat.png";
import profile from "../../../assets/images/features/dashboard/profile.png";

export const dashboard: ProjectModel = {
   mainInfo: dashboardMain,
   description: "Un Sencillo y multifuncional dashboard para administradores",
   role: "Diseño de UI / Código",
   date: "NOV 2022",
   overview:
      "Concepto para dashboard hecho con componentes de Syncfucion y react-router-dom.",
   technologies: dashboardTech,
   features: [
      {
         name: "Sidebar",
         description:
            "Para navegar entre todas las páginas, aplicaciones y tablas",
         img: sidebar,
      },
      {
         name: "Cambio de Color del Tema",
         description:
            "Claro/Oscuro o cambio del color principal con ContextApi",
         img: theme,
      },
      {
         name: "Carrito",
         description: "",
         img: cart,
      },
      {
         name: "Chat",
         description: "",
         img: chat,
      },
      {
         name: "Notificaciones",
         description: "",
         img: notifications,
      },
      {
         name: "Perfil",
         description: "",
         img: profile,
      },
   ],
};
