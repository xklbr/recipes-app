import { Link } from "react-router-dom";

import { AuthLoginForm } from "features/auth";
import { AuthLayout } from "layouts";

import Image from "assets/images/login-imagen.webp";

export function AuthLoginPage() {
  return (
    <AuthLayout
      porperties={{
        headTitle: "Inicio de sesión",
        title: "Recetas App",
        description: "Inicia sesión para continuar",
        image: Image,
      }}
    >
      <AuthLoginForm />
      <Link color="inherit" to="/auth/register">
        Crear una cuenta
      </Link>
    </AuthLayout>
  );
}
