import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "common/hooks";
import { getRecipesThunk } from "features/recipes";

import {
  CakePage,
  ChildrensMenuPage,
  FastFoodPage,
  HomePage,
  MainCoursePage,
  SoupPage,
  VegetarianPage,
} from "pages";

export function RecipesRoutes() {
  const { status } = useAppSelector((state) => state.recipes);
  const dispatch = useAppDispatch();

  const getRecipes = () => {
    if (status === null) return dispatch(getRecipesThunk());
  };

  useEffect(() => {
    getRecipes();
  }, [status]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tortas" element={<CakePage />} />
      <Route path="/menu-infantil" element={<ChildrensMenuPage />} />
      <Route path="/comida-rapida" element={<FastFoodPage />} />
      <Route path="/principales" element={<MainCoursePage />} />
      <Route path="/sopas" element={<SoupPage />} />
      <Route path="/vegetarianos" element={<VegetarianPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
}
