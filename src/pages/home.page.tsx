import Slider from "react-slick";
import { useMediaQueries } from "@react-hook/media-query";

import { useAppSelector } from "common/hooks";
import { RecipesLayout } from "layouts";
import { Card } from "components";

import HeroImage from "assets/images/hero-home.webp";

export function HomePage() {
  const recipes = useAppSelector((state) => state.recipes.recipes);
  const mainCourse = recipes?.filter((recipe) => recipe.favorite);

  const {
    matches: { isMobile },
  } = useMediaQueries({
    isMobile: "only screen and (min-width: 320px) and (max-width: 1024px)",
  });

  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: isMobile ? 2 : 4,
    slidesToScroll: 1,
    cssEasy: "linear",
  };

  return (
    <RecipesLayout
      porperties={{
        headTitle: "Home",
        heroTitle: "Recetas",
        heroTitleHightlight: "para todos",
        description: "Nuevas recetas",
        heroImage: HeroImage,
      }}
    >
      <article className="ui__slider-container ui__mx-3">
        <Slider {...settings}>
          {mainCourse &&
            mainCourse?.map(
              (recipe) =>
                recipe.favorite && <Card key={recipe.id} recipe={recipe} />
            )}
        </Slider>
      </article>
    </RecipesLayout>
  );
}
