import { StaticImageData } from "next/image";

export interface TechnologiesModel {
   name: string;
   link: string;
   img: StaticImageData;
}

export interface ProjectMainInfoModel {
   link: string;
   title: string;
   img: StaticImageData;
   website: string;
   repository: string;
}

export default interface ProjectModel {
   mainInfo: ProjectMainInfoModel;
   description: string;
   role: string;
   date: string;
   overview: string;
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
   technologies: TechnologiesModel[];
}
