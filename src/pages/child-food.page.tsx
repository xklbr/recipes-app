import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-infantil.webp";

export function ChildrensMenuPage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const childrensMenu = recipes?.filter(
    (recipe) => recipe.category === "infantil"
  );

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Niños",
        heroTitle: "Recetas",
        heroTitleHightlight: "para niños",
        description: "Children's menu",
        heroImage: HeroImage,
        data: childrensMenu,
      }}
    ></RecipesLayout>
  );
}
