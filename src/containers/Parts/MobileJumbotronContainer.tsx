import { useEffect, useState } from "react";

type Props = {
   isActive: boolean;
   children: React.ReactNode;
};

export default function MobileJumbotronContainer({
   isActive,
   children,
}: Props) {
   const [showMobileJumbotron, setShowMobileJumbotron] = useState(true);
   useEffect(() => {
      if (isActive) {
         setShowMobileJumbotron(false);
         setTimeout(() => setShowMobileJumbotron(true), 50);
      }
   }, [isActive]);
   return <>{showMobileJumbotron && children}</>;
}
