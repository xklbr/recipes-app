import { NavLink } from "react-router-dom";

import { useAppDispatch } from "common/hooks";

import { logout } from "features/auth";
import { clearRecipes } from "features/recipes";

import Logout from "assets/images/icon_logout.svg";

export function Navbar() {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    localStorage.removeItem("auth_user");
    dispatch(logout());
    dispatch(clearRecipes());
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      <div>
        <NavLink className="navbar__logo" to="/">
          Recipe <span className="navbar__logo--text">App</span>
        </NavLink>
      </div>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/vegetarianos"
        >
          Vegetarianos
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/principales"
        >
          Platos Principales
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/tortas"
        >
          Tortas
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/comida-rapida"
        >
          Comida Rápida
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/menu-infantil"
        >
          Menú Niños
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "navbar__link navbar__active" : "navbar__link"
          }
          to="/sopas"
        >
          Sopas
        </NavLink>
        <img className="form__password-icon" src={Logout} onClick={onLogout} />
      </div>
    </nav>
  );
}
