// import { useState } from "react";
import MenuContainer from "../components/Menu/MenuContainer";
import MenuFooter from "../components/Menu/MenuFooter";
import MenuOption from "../components/Menu/MenuOption";
import MenuOptionsContainer from "../components/Menu/MenuOptionsContainer";
import MenuTitle from "../components/Menu/MenuTitle";
import usePositionContext from "../context/PositionContext";

export default function Menu() {
   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();

   return (
      <MenuContainer>
         <MenuTitle />
         <MenuOptionsContainer>
            <MenuOption index={0} bulletRef={homeBullet}>
               Home
            </MenuOption>
            <MenuOption index={1} bulletRef={aboutBullet}>
               About
            </MenuOption>
            <MenuOption index={2} bulletRef={projectsBullet}>
               Projects
            </MenuOption>
            <MenuOption index={3} bulletRef={contactBullet}>
               Contact
            </MenuOption>
         </MenuOptionsContainer>
         <MenuFooter />
      </MenuContainer>
   );
}
