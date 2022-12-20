import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-comida-rapida.webp";

export function FastFoodPage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const fastFood = recipes?.filter(
    (recipe) => recipe.category === "comida_rapida"
  );

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Comida rápida",
        heroTitle: "Recetas",
        heroTitleHightlight: "urbanas",
        description: "Comida rápida",
        heroImage: HeroImage,
        data: fastFood,
      }}
    ></RecipesLayout>
  );
}
