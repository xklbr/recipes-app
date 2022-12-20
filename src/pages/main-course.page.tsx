import { useAppSelector } from "common/hooks";

import { RecipesLayout } from "layouts";

import HeroImage from "assets/images/hero-plato-principal.webp";

export function MainCoursePage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const mainCourse = recipes?.filter(
    (recipe) => recipe.category === "principales"
  );

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Principales",
        heroTitle: "Recetas",
        heroTitleHightlight: "únicas",
        description: "Platos principales",
        heroImage: HeroImage,
        data: mainCourse,
      }}
    ></RecipesLayout>
  );
}
