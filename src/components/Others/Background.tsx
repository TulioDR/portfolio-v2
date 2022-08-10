import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

type Props = {};

export default function Background({}: Props) {
   return (
      <div className="h-screen w-full fixed top-0 left-0 flex justify-end pl-40 pr-20 py-24">
         <MouseParallaxContainer
            useWindowMouseEvents={true}
            className="h-full w-3/5 flex items-center"
            containerStyles={{ overflow: "visible" }}
         >
            <MouseParallaxChild
               factorX={0.04}
               factorY={0.04}
               className="w-full"
            >
               <img
                  src="/logo/moon-shine.svg"
                  alt="moon-shine"
                  className="w-full"
               />
            </MouseParallaxChild>
         </MouseParallaxContainer>
      </div>
   );
}
