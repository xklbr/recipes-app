import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-vegetariana.webp";

export function VegetarianPage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const vegetarian = recipes?.filter(
    (recipe) => recipe.category === "vegetariana"
  );

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Vegetarianas",
        heroTitle: "Recetas",
        heroTitleHightlight: "naturales",
        description: "Platos vegetarianos",
        heroImage: HeroImage,
        data: vegetarian,
      }}
    ></RecipesLayout>
  );
}
