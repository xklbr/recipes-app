interface Props {
  variant?: string;
  source: string;
  title?: string;
}

export function Image({ source, variant, title }: Props) {
  return <img className={variant} src={source} alt={title} />;
}
