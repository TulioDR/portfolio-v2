import ProjectModel from "../../models/ProjectModel";
import { filmOrganizer } from "./projects/fileOrganizer";
import { pokedex } from "./projects/pokedex";
import { portfolioV1 } from "./projects/portfolioV1";

const spanishProjects: ProjectModel[] = [filmOrganizer, pokedex, portfolioV1];

export default spanishProjects;
