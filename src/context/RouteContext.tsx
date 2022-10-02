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
   setPositionValues: React.Dispatch<
      React.SetStateAction<PositionValues | null>
   >;
   backgroundImage: StaticImageData;
   selectedProjectId: any;
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
   const [selectedProjectId, setSelectedProjectId] = useState<string>("");

   const goBack = async (img: StaticImageData, query: string) => {
      setSelectedProjectId(query);
      setBackgroundImage(img);
      router.push("/#projects");

      // the delay is equal to the delay on the elements exit duration on [project]
      setTimeout(() => {
         setBackAnimation(true);
      }, 700);
   };

   const goForward = (img: StaticImageData, link: string) => {
      setBackgroundImage(img);
      const project = document.getElementById(link);
      const { clientWidth, clientHeight, offsetLeft, offsetTop } = project!;
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
      backgroundImage,
      selectedProjectId,
      goBack,
      goForward,
      setForwardAnimation,
      setBackAnimation,
   };
   return (
      <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
   );
}
