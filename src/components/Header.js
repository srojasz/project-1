import React from "react";
import "../stylesheets/header.scss";

function Header(props) {
  const {
    handleToggleClass,
    activeClass,
    language,
    spanishTexts,
    englishTexts,
  } = props;

  const mainText =
    language === "spanish"
      ? spanishTexts.starterText
      : englishTexts.starterText;

  const secondaryText =
    language === "spanish"
      ? spanishTexts.secondaryText
      : englishTexts.secondaryText;

  return (
    <header className="header">
      <div className="header__toggle--container">
        <label className="header__toggle">
          <input type="checkbox" />
          <span
            className="header__toggle--btn"
            onClick={handleToggleClass}
          ></span>
        </label>
        <span data-js-toggle-text className={activeClass}>
          English, please!
        </span>
      </div>
      <h2 className="header__title">My game vitae!</h2>
      <h3 className="header__subtitle">
        Why just apply when you can also play?
      </h3>
      <p className="header__text">{mainText}</p>
      <p className="header__text">{secondaryText}</p>
    </header>
  );
}

export default Header;
