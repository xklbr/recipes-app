import { Link } from "react-router-dom";

import { AuthRegisterForm } from "features/auth";
import { AuthLayout } from "layouts";

import Image from "assets/images/registro-imagen.webp";

export function AuthRegisterPage() {
  return (
    <AuthLayout
      porperties={{
        headTitle: "Registro",
        title: "Recetas App",
        description: "Crear una cuenta",
        image: Image,
      }}
    >
      <AuthRegisterForm />
      <Link color="inherit" to="/auth/login">
        Iniciar sesión
      </Link>
    </AuthLayout>
  );
}
