import { StaticImageData } from "next/image";
import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

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
   setValues: (element: HTMLElement) => void;
   backgroundImage: StaticImageData;
   selectedProjectId: string;
   closeProjectDetails: (img: StaticImageData, query: string) => void;
   openProjectDetails: (img: StaticImageData, id: string, link: string) => void;
   setForwardAnimation: React.Dispatch<React.SetStateAction<boolean>>;
   setBackAnimation: React.Dispatch<React.SetStateAction<boolean>>;
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
   const [selectedProjectId, setSelectedProjectId] = useState<string>("");

   const setValues = (element: HTMLElement) => {
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = element;
      setPositionValues({
         width: clientWidth,
         height: clientHeight,
         x: offsetLeft,
         y: offsetTop,
      });
   };

   const openProjectDetails = (
      img: StaticImageData,
      id: string,
      link: string
   ): void => {
      setBackgroundImage(img);
      const project = document.getElementById(id);
      setValues(project!);
      setForwardAnimation(true);
      router.push(`/${link}`);
   };

   const closeProjectDetails = (img: StaticImageData, id: string): void => {
      setBackgroundImage(img);
      setSelectedProjectId(id);
      // the delay is equal to the delay on the elements exit duration on [project]
      setTimeout(() => {
         setBackAnimation(true);
      }, 700);
      router.push("/#projects");
   };

   const value = {
      positionValues,
      setValues,
      forwardAnimation,
      backAnimation,
      backgroundImage,
      selectedProjectId,
      closeProjectDetails,
      openProjectDetails,
      setForwardAnimation,
      setBackAnimation,
   };
   return (
      <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
   );
}
