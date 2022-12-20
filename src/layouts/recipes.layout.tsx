import { ReactNode } from "react";
import { useMediaQueries } from "@react-hook/media-query";

import {
  Card,
  Footer,
  HeaderMobile,
  Hero,
  Navbar,
  NavbarMobile,
} from "components";
import { RecipesLayoutInterface } from "interfaces";

interface RecipesLayoutProperties {
  porperties: RecipesLayoutInterface;
  children?: ReactNode;
}

export function RecipesLayout({
  children,
  porperties,
}: RecipesLayoutProperties) {
  const {
    matches: { isMobile },
  } = useMediaQueries({
    isMobile: "only screen and (min-width: 320px) and (max-width: 1024px)",
  });

  return (
    <>
      <title>{`Recetas - ${porperties.headTitle}`}</title>
      {isMobile && (
        <section className="layout__recipes">
          <HeaderMobile />
          <Hero
            image={porperties.heroImage}
            title={porperties.heroTitle}
            hightlightTitle={porperties.heroTitleHightlight}
          />
          <NavbarMobile />
          <section className="ui__container-fluid">
            <h2 className="layout__recipes__title-section">
              {porperties.description}
            </h2>
            {porperties.data && (
              <article className="layout__recipes__item-container">
                {porperties.data?.map((recipe, index) => (
                  <section
                    key={index}
                    className="layout__recipes__card-container"
                  >
                    <Card recipe={recipe} variant="card__group" />
                  </section>
                ))}
              </article>
            )}
            <main className="ui__main-content">{children}</main>
          </section>
          <Footer />
        </section>
      )}
      {!isMobile && (
        <section className="layout__recipes">
          <Navbar />
          <Hero
            image={porperties.heroImage}
            title={porperties.heroTitle}
            hightlightTitle={porperties.heroTitleHightlight}
          />
          <section className="ui__container-fluid">
            <h2 className="layout__recipes__title-section">
              {porperties.description}
            </h2>
            {porperties.data && (
              <article className="layout__recipes__item-container">
                {porperties.data?.map((recipe, index) => (
                  <section
                    key={index}
                    className="layout__recipes__card-container"
                  >
                    <Card recipe={recipe} variant="card__group" />
                  </section>
                ))}
              </article>
            )}
            <main className="ui__main-content">{children}</main>
          </section>
          <Footer />
        </section>
      )}
    </>
  );
}
