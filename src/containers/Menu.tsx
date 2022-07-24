// import { useState } from "react";
import MenuContainer from "../components/Menu/MenuContainer";
import MenuOption from "../components/Menu/MenuOption";
import usePositionContext from "../context/PositionContext";

type Props = {
   closeMenu: any;
};

export default function Menu({ closeMenu }: Props) {
   const { homeBullet, aboutBullet, projectsBullet, contactBullet } =
      usePositionContext();

   return (
      <MenuContainer>
         <MenuOption
            closeMenu={closeMenu}
            bulletRef={homeBullet}
            delay={0.35}
            index={0}
         >
            Home
         </MenuOption>
         <MenuOption
            closeMenu={closeMenu}
            bulletRef={aboutBullet}
            delay={0.4}
            index={1}
         >
            About
         </MenuOption>
         <MenuOption
            closeMenu={closeMenu}
            bulletRef={projectsBullet}
            delay={0.45}
            index={2}
         >
            Projects
         </MenuOption>
         <MenuOption
            closeMenu={closeMenu}
            bulletRef={contactBullet}
            delay={0.5}
            index={3}
         >
            Contact
         </MenuOption>
      </MenuContainer>
   );
}
