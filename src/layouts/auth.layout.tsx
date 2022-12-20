import { ReactNode } from "react";
import { AuthLayoutInterface } from "interfaces";

interface AuthLayoutProperties {
  porperties: AuthLayoutInterface;
  children?: ReactNode;
}

export function AuthLayout({ children, porperties }: AuthLayoutProperties) {
  return (
    <>
      <title>{`Recetas - ${porperties.headTitle}`}</title>
      <section className="auth">
        <article className="auth__content">
          <section className="auth__image-container">
            <img
              src={porperties.image}
              alt="autenticación-imagen"
              className="auth__image-container__image"
            />
          </section>
          <section className="auth__form">
            <h3 className="auth__form__title">{porperties.title}</h3>
            <p className="auth__form__description">{porperties.description}</p>
            <main className="">{children}</main>
          </section>
        </article>
      </section>
    </>
  );
}
