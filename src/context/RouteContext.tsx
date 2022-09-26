import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { createContext, useContext, useRef, useState } from "react";

interface PositionValues {
   width: number;
   height: number;
   x: number;
   y: number;
}

interface AppContextInterface {
   forwardAnimation: boolean;
   backAnimation: boolean;
   positionValues: PositionValues | null;
   setPositionValues: React.Dispatch<
      React.SetStateAction<PositionValues | null>
   >;
   project1: React.RefObject<HTMLDivElement>;
   project2: React.RefObject<HTMLDivElement>;
   project3: React.RefObject<HTMLDivElement>;
   backgroundImage: StaticImageData;
   selectedProject: any;
   goBack: any;
   goForward: any;

   setForwardAnimation: any;
   setBackAnimation: any;
}
type Props = {
   children: React.ReactNode;
};

const RouteContext = createContext({} as AppContextInterface);
export default function useRouteContext() {
   return useContext(RouteContext);
}

export function RouteProvider({ children }: Props) {
   const router = useRouter();

   const [positionValues, setPositionValues] = useState<PositionValues | null>(
      null
   );
   const [forwardAnimation, setForwardAnimation] = useState<boolean>(false);
   const [backAnimation, setBackAnimation] = useState<boolean>(false);
   const [backgroundImage, setBackgroundImage] = useState<any>(null);
   const [selectedProject, setSelectedProject] = useState<any>(null);

   const project1 = useRef<HTMLDivElement>(null);
   const project2 = useRef<HTMLDivElement>(null);
   const project3 = useRef<HTMLDivElement>(null);

   const selectProject = (query: string) => {
      if (query === "film-organizer") setSelectedProject(project1);
      if (query === "simple-pokedex") setSelectedProject(project2);
      if (query === "portfolio-v1") setSelectedProject(project3);
   };

   const goBack = async (img: any, query: string) => {
      selectProject(query);
      setBackgroundImage(img);
      router.push("/#projects");

      // the delay is equal to the delay on the elements exit duration on [project]
      setTimeout(() => {
         setBackAnimation(true);
      }, 600);
   };

   const goForward = (img: any, ref: any, link: string) => {
      setBackgroundImage(img);
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = ref.current!;
      setPositionValues({
         width: clientWidth,
         height: clientHeight,
         x: offsetLeft,
         y: offsetTop,
      });
      setForwardAnimation(true);
      router.push(`/${link}`);
   };

   const value = {
      positionValues,
      setPositionValues,
      forwardAnimation,
      backAnimation,
      project1,
      project2,
      project3,
      backgroundImage,
      selectedProject,
      goBack,
      goForward,
      setForwardAnimation,
      setBackAnimation,
   };
   return (
      <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
   );
}
