export interface AuthInterface {
  id?: string;
  fullName?: string;
  email: string;
  password: string;
  statusRegister?: string;
  roles?: [];
  statusCompany?: string;
  errorMessage?: string;
}
