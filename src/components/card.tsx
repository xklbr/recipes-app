import { useState } from "react";

import { Recipes } from "features/recipes";

import Star from "assets/images/icon_star.svg";
import Favorite from "assets/images/icon_favorite.svg";
import Portion from "assets/images/icon_portion.svg";
import Time from "assets/images/icon_time.svg";
import Chef from "assets/images/icon_chef.svg";

type CardProperties = {
  recipe: Recipes;
  variant?: string;
};

export function Card({ recipe, variant }: CardProperties) {
  const {
    image,
    title,
    mainTitle,
    score,
    portion_size,
    preparation_minutes,
    difficulty,
  } = recipe;

  const [isHovering, setIsHovering] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <article
      className={`card ${variant}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="card__image" src={image} alt="Receta imagen" />
      {isHovering ? (
        <section className="card__hover-section ui__w-100 ui__center-items ui__flex-column">
          <article className="card__hover-section__description">
            <img className="card__icon" src={Portion} alt="Receta imagen" />
            <p className="card__subtitle">Tamaño de la porción</p>
            <p className="card__description">{portion_size}</p>
          </article>
          <article className="card__hover-section__description">
            <img className="card__icon" src={Time} alt="Receta imagen" />
            <p className="card__subtitle">Tiempo de preparación</p>
            <p className="card__description">{preparation_minutes}</p>
          </article>
          <article className="card__hover-section__description">
            <img className="card__icon" src={Chef} alt="Receta imagen" />
            <p className="card__subtitle">Dificultad</p>
            <p className="card__description">{difficulty}</p>
          </article>
        </section>
      ) : (
        <section className="ui__w-100 ui__center-items">
          <p className="card__title">
            {title} <span className="card__title--highlight">{mainTitle}</span>
          </p>
          <article className="card__footer">
            <section className="card__footer__item-container">
              <img
                className="card__footer__icon"
                src={Star}
                alt="Puntaje icono"
              />
              <p className="card__footer__score">{score}</p>
            </section>
            <section className="card__footer__item-container">
              <img
                className="card__footer__icon"
                src={Favorite}
                alt="Favorito icono"
              />
            </section>
          </article>
        </section>
      )}
    </article>
  );
}
