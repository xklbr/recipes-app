import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch } from "common/hooks";
import { authRegisterThunk } from "../store";

import { emailValid, passwordValid } from "common/validation";
import { MESSAGE_HANDLER } from "common/message.handler";

import Show from "assets/images/icon_show.svg";
import ShowOff from "assets/images/icon_show_off.svg";

interface AuthRegisterValues {
  fullName: string;
  email: string;
  password: string;
}

export function AuthRegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthRegisterValues>();
  const [onShow, setOnShow] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<AuthRegisterValues> = (data) => {
    const { email, password } = data;
    dispatch(authRegisterThunk({ email, password }));
  };

  const handleShowPassword = () => {
    setOnShow(!onShow);
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form__input"
          placeholder="Nombre completo"
          id="fullName"
          type="text"
          {...register("fullName", { required: true, minLength: 2 })}
        />
        <span className="form__error">
          {errors.fullName &&
            errors.fullName.type === "required" &&
            MESSAGE_HANDLER.FULLNAME_REQUIRED}
          {errors.fullName &&
            errors.fullName.type === "minLength" &&
            MESSAGE_HANDLER.FULLNAME_SHORT}
        </span>
        <input
          className="form__input"
          placeholder="Correo eléctronico"
          id="email"
          type="email"
          {...register("email", { required: true, pattern: emailValid })}
        />
        <span className="form__error">
          {errors.email &&
            errors.email.type === "required" &&
            MESSAGE_HANDLER.EMAIL_REQUIRED}
          {errors.email &&
            errors.email.type === "pattern" &&
            MESSAGE_HANDLER.EMAIL_INVALID}
        </span>
        <div className="form__input-container">
          <input
            className="form__input"
            placeholder="Contraseña"
            id="password"
            type={onShow ? "text" : "password"}
            {...register("password", {
              required: true,
              minLength: 8,
              pattern: passwordValid,
            })}
          />
          <img
            className="form__password-icon"
            src={onShow ? ShowOff : Show}
            onClick={handleShowPassword}
          />
        </div>
        <span className="form__error">
          {errors.password &&
            errors.password.type === "required" &&
            MESSAGE_HANDLER.PASSWORD_REQUIRED}
          {errors.password &&
            errors.password.type === "minLength" &&
            MESSAGE_HANDLER.PASSWORD_SHORT}
          {errors.password &&
            errors.password.type === "pattern" &&
            MESSAGE_HANDLER.PASSWORD_INVALID}
        </span>
        <button className="ui__btn-main" type="submit">
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
