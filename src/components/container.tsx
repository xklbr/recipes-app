import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  variant?: string;
}

export function Container({ children, variant = "" }: Props) {
  return <section className={`container ${variant}`}>{children}</section>;
}
