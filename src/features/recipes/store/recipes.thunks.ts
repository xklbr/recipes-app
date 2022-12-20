import { AnyAction, ThunkAction } from "@reduxjs/toolkit";

import { RootState } from "store";
import { getRecipesServices } from "../services";
import { checkingRecipes } from "./recipes.slice";

export function getRecipesThunk(): ThunkAction<
  void,
  RootState,
  unknown,
  AnyAction
> {
  return async (dispatch) => {
    const recipes = await getRecipesServices();
    dispatch(checkingRecipes());
    dispatch({ type: "recipes/loadedRecipes", payload: recipes });
  };
}
