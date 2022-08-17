import {
   MouseParallaxChild,
   MouseParallaxContainer,
} from "react-parallax-mouse";

type Props = {};

export default function Background({}: Props) {
   return (
      <div className="h-screen w-full fixed top-0 left-0 flex justify-end px-5 md:px-16 lg:px-20 py-24 xl:pl-40 2xl:pl-48 lg:pr-20 2xl:pr-32">
         <MouseParallaxContainer
            useWindowMouseEvents={true}
            className="h-full w-full sm:w-3/5 flex items-center"
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
                  className="w-full translate-y-20 translate-x-5 sm:translate-x-0 sm:translate-y-0"
               />
            </MouseParallaxChild>
         </MouseParallaxContainer>
      </div>
   );
}
