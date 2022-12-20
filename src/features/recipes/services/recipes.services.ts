import { getApi } from "api";
import { Recipes } from "../interfaces";

export async function getRecipesServices() {
  try {
    const { data } = await getApi.get<Recipes[]>("recipes");
    return data;
  } catch (err) {
    if (err instanceof Error) {
      return {
        ok: false,
        error: err.message,
      };
    }
  }
}
