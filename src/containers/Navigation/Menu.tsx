// import { useState } from "react";
import MenuContainer from "../../components/Menu/MenuContainer";
import MenuFooter from "../../components/Menu/MenuFooter";
import MenuOption from "../../components/Menu/MenuOption";
import MenuOptionsContainer from "../../components/Menu/MenuOptionsContainer";
import MenuTitle from "../../components/Menu/MenuTitle";
import useLanguageContext from "../../context/LanguageContext";
import usePositionContext from "../../context/PositionContext";

export default function Menu() {
   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();

   const { currentIdiom } = useLanguageContext();
   const { home, about, projects, contact } = currentIdiom.menu;
   return (
      <MenuContainer>
         <MenuTitle />
         <MenuOptionsContainer>
            <MenuOption index={0} bulletRef={homeBullet}>
               {home}
            </MenuOption>
            <MenuOption index={1} bulletRef={aboutBullet}>
               {about}
            </MenuOption>
            <MenuOption index={2} bulletRef={projectsBullet}>
               {projects}
            </MenuOption>
            <MenuOption index={3} bulletRef={contactBullet}>
               {contact}
            </MenuOption>
         </MenuOptionsContainer>
         <MenuFooter />
      </MenuContainer>
   );
}
