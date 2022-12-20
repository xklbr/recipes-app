import axios from "axios";

export const getApi = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
