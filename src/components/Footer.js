import React from "react";
import "../stylesheets/footer.scss";

function Footer() {
  const cvUrl =
    "https://drive.google.com/file/d/1E437fkUNZA5SwoeoCGXs12KNXBVxtsLE/view";
  return (
    <footer className="footer">
      <section className="footer__info">
        <p className="footer__info--text">
          ¡Me encanta tu idea, pero no tengo tiempo! ¿Me lo cuentas del tirón?
        </p>
        <a
          href={cvUrl}
          target="_blank"
          title="Descarga el CV en PDF"
          className="footer__info--button"
        >
          Sara, ¡vamos al grano!
        </a>
      </section>
      <section className="footer__social">
        <p>Aquí van las redes sociales</p>
      </section>
    </footer>
  );
}

export default Footer;
