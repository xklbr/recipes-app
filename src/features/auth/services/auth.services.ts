import { getApi } from "api";
import { AuthInterface } from "../interface";

export async function authRegisterService(payload: AuthInterface) {
  try {
    const authRegister = await getApi.post("auth/register", payload);
    return {
      ok: true,
      ...authRegister.data,
    };
  } catch (err) {
    if (err instanceof Error) {
      const { message } = err;
      return { message, ok: false };
    }
  }
}

export async function authLoginService({ email, password }: AuthInterface) {
  try {
    const authLogin = await getApi.post("auth/login", { email, password });
    return {
      ok: true,
      ...authLogin.data,
    };
  } catch (err) {
    if (err instanceof Error) {
      const { message } = err;
      return { message, ok: false };
    }
  }
}
