// import { useState } from "react";
import MenuContainer from "../components/Menu/MenuContainer";
import MenuOption from "../components/Menu/MenuOption";
import usePositionContext from "../context/PositionContext";

export default function Menu() {
   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();

   return (
      <MenuContainer>
         <MenuOption index={0} delay={0.35} bulletRef={homeBullet}>
            Home
         </MenuOption>
         <MenuOption index={1} delay={0.4} bulletRef={aboutBullet}>
            About
         </MenuOption>
         <MenuOption index={2} delay={0.45} bulletRef={projectsBullet}>
            Projects
         </MenuOption>
         <MenuOption index={3} delay={0.5} bulletRef={contactBullet}>
            Contact
         </MenuOption>
      </MenuContainer>
   );
}
