import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { Recipes } from "../interfaces";

interface RecipeState {
  status: string | null;
  recipes: Recipes[];
}

const initialState: RecipeState = {
  status: null,
  recipes: [],
};

export const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    checkingRecipes: (state) => {
      state.status = "checking-recipes";
    },
    errorLoadingRecipes: (state) => {
      state.status = "failed-load";
    },
    loadedRecipes: (state, action: PayloadAction<Recipes[]>) => {
      state.status = "recipes-loaded";
      state.recipes = action.payload;
    },
    clearRecipes: (state) => {
      state.status = null;
      state.recipes = [];
    },
  },
});

export const {
  checkingRecipes,
  errorLoadingRecipes,
  loadedRecipes,
  clearRecipes,
} = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipes;
