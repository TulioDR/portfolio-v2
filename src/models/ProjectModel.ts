import { StaticImageData } from "next/image";

export default interface ProjectModel {
   link: string;
   title: string;
   img: StaticImageData;
   description: string;
   website: string;
   repository: string;
   role: string;
   date: string;
   overview: string;
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
   technologies: {
      name: string;
      link: string;
      img: StaticImageData;
   }[];
}
