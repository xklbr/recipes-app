export function checkAuthHelper() {
  const status = localStorage.getItem("auth_user");
  if (!status) {
    localStorage.removeItem("auth_user");
    return false;
  }
  return true;
}
