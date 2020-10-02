import React from "react";
import "../stylesheets/footer.scss";

function Footer(props) {
  const { spanishTexts, englishTexts, language } = props;

  const noTimeText =
    language === "spanish" ? spanishTexts.noTimeText : englishTexts.noTimeText;

  const fastButton =
    language === "spanish" ? spanishTexts.fastButton : englishTexts.fastButton;

  const cvUrl =
    language === "spanish"
      ? "https://drive.google.com/file/d/1E437fkUNZA5SwoeoCGXs12KNXBVxtsLE/view"
      : "https://drive.google.com/file/d/1fJmwHEkny7Uy6AvP9NihjX3d9pJmSB71/view?usp=sharing";
  return (
    <footer className="footer">
      <section className="footer__info">
        <p className="footer__info--text">{noTimeText}</p>
        <a
          href={cvUrl}
          target="_blank"
          title="Descarga el CV en PDF"
          className="footer__info--button"
        >
          {fastButton}
        </a>
      </section>
      <section className="footer__social">
        <p>Aquí van las redes sociales</p>
      </section>
    </footer>
  );
}

export default Footer;
