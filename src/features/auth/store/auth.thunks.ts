import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { authLoginService, authRegisterService } from "../services";
import {
  checkingCredentials,
  login,
  logout,
  register,
  statusRegister,
} from "./auth.slice";
import { AuthInterface } from "../interface";

export function authRegisterThunk({
  email,
  password,
  fullName,
}: AuthInterface): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    dispatch(statusRegister("start register"));
    const authRegister = await authRegisterService({
      email,
      password,
      fullName,
    });

    if (!authRegister.ok) return dispatch(statusRegister("error register"));

    dispatch(statusRegister("successful"));
    dispatch(register(authRegister));
    localStorage.setItem("auth_user", JSON.stringify(authRegister));
  };
}

export function authLoginThunk({
  email,
  password,
}: AuthInterface): ThunkAction<void, RootState, unknown, AnyAction> {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const authLogin = await authLoginService({ email, password });
    if (!authLogin.ok) {
      dispatch(logout());
      return localStorage.removeItem("auth_user");
    }
    localStorage.setItem("auth_user", JSON.stringify(authLogin));

    dispatch(login(authLogin));
  };
}
