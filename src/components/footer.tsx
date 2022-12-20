import Sponsor from "assets/images/footer.webp";

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Con el patrocinio de</p>
      <img className="footer__image" src={Sponsor} alt="Patrocinador imagen" />
    </footer>
  );
}
