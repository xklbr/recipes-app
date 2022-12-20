import { Image } from "components";

interface Props {
  image: string;
  title: string;
  hightlightTitle: string;
}

export function Hero({ image, title, hightlightTitle }: Props) {
  return (
    <section className="hero">
      <article className="hero__text-content">
        <h1 className="hero__title">
          {title} <br />
          <span className="hero__title--highlight">{hightlightTitle}</span>
        </h1>
      </article>
      <Image variant="hero__image" source={image} title="Hero imagen" />
    </section>
  );
}
