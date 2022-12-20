import { NavLink } from "react-router-dom";

import Vegetarian from "assets/images/icon_vegetarian.svg";
import Main from "assets/images/icon_main.svg";
import Cake from "assets/images/icon_cake.svg";
import Fast from "assets/images/icon_fast-food.svg";
import Kids from "assets/images/icon_kids.svg";
import Soup from "assets/images/icon_soup.svg";

export function NavbarMobile() {
  return (
    <nav className="navbar--mobile">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/vegetarianos"
      >
        <img
          className="navbar--mobile__image"
          src={Vegetarian}
          alt="vegetarianos imagen"
        />
        Vegetarianos
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/principales"
      >
        <img
          className="navbar--mobile__image"
          src={Main}
          alt="principales imagen"
        />
        Principales
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/tortas"
      >
        <img className="navbar--mobile__image" src={Cake} alt="Tortas imagen" />
        Tortas
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/comida-rapida"
      >
        <img
          className="navbar--mobile__image"
          src={Fast}
          alt="Comida rápida imagen"
        />
        Rápida
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/menu-infantil"
      >
        <img
          className="navbar--mobile__image"
          src={Kids}
          alt="Menú niños imagen"
        />
        Menú Niños
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "navbar--mobile__link navbar--mobile__active"
            : "navbar--mobile__link"
        }
        to="/sopas"
      >
        <img className="navbar--mobile__image" src={Soup} alt="Sopas imagen" />
        Sopas
      </NavLink>
    </nav>
  );
}
