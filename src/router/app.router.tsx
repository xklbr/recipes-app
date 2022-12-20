import { Navigate, Route, Routes } from "react-router-dom";

import { useAppSelector } from "common/hooks";
import { checkAuthHelper } from "common/helpers";

import { AuthRoutes } from "features/auth";
import { RecipesRoutes } from "features/recipes";
import { Spinner } from "components";

export function AppRouter() {
  const { status } = useAppSelector((state) => state.auth);
  const authStatus = checkAuthHelper();

  if (status === "checking") {
    return <Spinner title="Cargando sabores..." />;
  }

  return (
    <Routes>
      {authStatus ? (
        <Route path="/*" element={<RecipesRoutes />} />
      ) : (
        <Route path="/auth/*" element={<AuthRoutes />} />
      )}
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
