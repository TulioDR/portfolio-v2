import nextjs from "../images/technologies/nextjs.png";
import mongodb from "../images/technologies/mongodb.png";
import express from "../images/technologies/express.png";
import node from "../images/technologies/node.png";
import bootstrap from "../images/technologies/bootstrap.png";

import SkillModel from "../../models/SkillModel";

const otherSkillsList: SkillModel[] = [
   {
      name: "Next.js",
      img: nextjs,
      link: "https://nextjs.org/",
   },
   {
      name: "Mongo DB",
      img: mongodb,
      link: "https://www.mongodb.com/",
   },
   {
      name: "Express",
      img: express,
      link: "https://expressjs.com/",
   },
   {
      name: "Node.js",
      img: node,
      link: "https://nodejs.org/",
   },
   {
      name: "Bootstrap",
      img: bootstrap,
      link: "https://getbootstrap.com/",
   },
];

export default otherSkillsList;
