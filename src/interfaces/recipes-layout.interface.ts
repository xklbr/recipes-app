import { Recipes } from "features/recipes";

export interface RecipesLayoutInterface {
  headTitle: string;
  heroTitle: string;
  heroTitleHightlight: string;
  description: string;
  heroImage: string;
  data?: Recipes[];
}
