import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { AuthInterface } from "../interface";

type AuthState = {
  status: string | null;
  statusRegister: string | null;
  user: AuthInterface[];
};

const initialState: AuthState = {
  status: null,
  statusRegister: null,
  user: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    checkingCredentials: (state) => {
      state.status = "checking";
    },
    statusRegister: (state, action: PayloadAction<string>) => {
      state.statusRegister = action.payload;
    },
    register: (state, action: PayloadAction<AuthInterface[]>) => {
      state.status = "authenticated";
      state.user = action.payload;
    },
    login: (state, action: PayloadAction<AuthInterface[]>) => {
      state.status = "authenticated";
      state.user = action.payload;
    },
    logout: (state) => {
      state.status = "not-authenticated";
      state.user = [];
    },
  },
});

export const { statusRegister, register, login, logout, checkingCredentials } =
  authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
