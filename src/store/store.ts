import { configureStore } from "@reduxjs/toolkit";

import { authSlice } from "features/auth";
import { recipeSlice } from "features/recipes";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    recipes: recipeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
