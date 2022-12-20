import { NavLink } from "react-router-dom";

import { useAppDispatch } from "common/hooks";
import { logout } from "features/auth";
import { clearRecipes } from "features/recipes";

import Home from "assets/images/icon_home.svg";
import Logout from "assets/images/icon_logout.svg";

export function HeaderMobile() {
  const dispatch = useAppDispatch();

  const onLogout = () => {
    localStorage.removeItem("auth_user");
    dispatch(logout());
    dispatch(clearRecipes());
    localStorage.clear();
  };

  return (
    <nav className="header">
      <NavLink className="navbar__logo" to="/">
        Recipe <span className="navbar__logo--text">App</span>
      </NavLink>
      <NavLink className="" to="/">
        <img className="navbar--mobile__image" src={Home} alt="Home icono" />
      </NavLink>
      <img className="form__password-icon" src={Logout} onClick={onLogout} />
    </nav>
  );
}
