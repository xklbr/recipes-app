import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-sopas.webp";

export function SoupPage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const soup = recipes?.filter((recipe) => recipe.category === "sopas");

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Sopas",
        heroTitle: "Recetas",
        heroTitleHightlight: "especiales",
        description: "Sopas caseras",
        heroImage: HeroImage,
        data: soup,
      }}
    ></RecipesLayout>
  );
}
