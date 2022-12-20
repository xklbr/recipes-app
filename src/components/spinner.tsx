interface SpinnerProperties {
  title?: string;
}

export function Spinner({ title }: SpinnerProperties) {
  return (
    <div className="ui__spinner-container">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      {title && <p className="ui__spinner-title">{title}</p>}
    </div>
  );
}
