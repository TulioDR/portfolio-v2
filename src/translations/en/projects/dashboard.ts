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
   description: "Clean and Multifunctional Dashboard for admins",
   role: "UI Design / Coding",
   date: "NOV 2022",
   overview:
      "Dashboard concept made with Syncfusion components and react-router-dom.",
   technologies: dashboardTech,
   features: [
      {
         name: "Sidebar",
         description: "To navigate between all the pages, apps and charts",
         img: sidebar,
      },
      {
         name: "Theme Color Change",
         description:
            "Light/Dark or change of the main color with the ContextApi",
         img: theme,
      },
      {
         name: "Cart",
         description: "",
         img: cart,
      },
      {
         name: "Chat",
         description: "",
         img: chat,
      },
      {
         name: "Notifications",
         description: "",
         img: notifications,
      },
      {
         name: "Profile",
         description: "",
         img: profile,
      },
   ],
};
