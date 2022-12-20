interface Props {
  type: string;
  variant?: string;
  title: string;
}

export function Text({ type = "", title, variant = "" }: Props) {
  return type === "h1" ? (
    <h1 className={variant}>{title}</h1>
  ) : type === "h2" ? (
    <h2 className={variant}>{title}</h2>
  ) : type === "span" ? (
    <span className={variant}>{title}</span>
  ) : (
    <p className={variant}>{title}</p>
  );
}
