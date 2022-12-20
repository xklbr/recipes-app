import { Navigate, Route, Routes } from "react-router-dom";
import { AuthLoginPage, AuthRegisterPage } from "pages";

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="login" element={<AuthLoginPage />} />
      <Route path="register" element={<AuthRegisterPage />} />
      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
}
