import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-tortas.webp";

export function CakePage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const cake = recipes?.filter((recipe) => recipe.category === "tortas");

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Tortas",
        heroTitle: "Recetas",
        heroTitleHightlight: "dulces",
        description: "Tortas caseras",
        heroImage: HeroImage,
        data: cake,
      }}
    ></RecipesLayout>
  );
}
