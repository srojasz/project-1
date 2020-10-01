import React, { useState } from "react";
import CardList from "./CardList";
import Header from "./Header";
import Footer from "./Footer";
import "../stylesheets/app.scss";

function App() {
  const spanishTexts = {
    starterText:
      "¡Hola! Me llamo Sara Rojas y soy una desarrolladora Front-end junior con muchas ganas de trabajar y seguir aprendiendo sobre JavaScript, React, HTML y CSS. Después de 12 años como periodista, muchos de ellos vinculada al mundo digital, llevo un año en el sector tecnológico como desarrolladora. ¡Muy feliz y orgullosa de todo lo aprendido en este tiempo! Si estás buscando un perfil como este, te propongo un juego para ver si hacemos match: solo tienes que barajar las cartas y pinchar sobre ellas.",
    secondaryText:
      "Solo cuando hayas volteado todas y me conozcas todo mejor, podrás desbloquear la carta de BONUS. ¿Juegas?",
    shuffleButton: "A mezclar",
    noTimeText:
      "¡Me encanta tu idea, pero no tengo tiempo! ¿Me lo cuentas del tirón?",
    fastButton: "Al grano, Sara",
  };

  const englishTexts = {
    starterText:
      "Hi! My name is Sara Rojas and I am a junior Front-end developer eager to work and continue learning about JavaScript, React, HTML and CSS. After 12 years as a journalist, many of them linked to the digital world, I have been in the technology sector for a year as a developer. So happy and proud of everything learned in this time! If you are looking for a profile like this, I suggest you a game to see if we can match : you just have to shuffle the cards and click on them.",
    secondaryText:
      "Only when you have turned them all over and you know me all better, you can unlock the BONUS card. You play?",
    shuffleButton: "Shuffle now!",
    noTimeText:
      "I love your creativity, but I don't have time for this! Can you tell me all at once?",
    fastButton: "Don't roll up, please!",
  };

  // State.
  const [activeClass, setActiveClass] = useState("");
  const [languageSelected, setLanguage] = useState("spanish");

  const handleToggleClass = () => {
    const value = !!activeClass ? "" : "active";
    const languageSelected = !!activeClass ? "spanish" : "english";
    setActiveClass(value);
    setLanguage(languageSelected);
  };
  return (
    <div className="app-container">
      <Header
        handleToggleClass={handleToggleClass}
        activeClass={activeClass}
        language={languageSelected}
        spanishTexts={spanishTexts}
        englishTexts={englishTexts}
      />
      <CardList
        language={languageSelected}
        spanishTexts={spanishTexts}
        englishTexts={englishTexts}
      />
      <Footer
        language={languageSelected}
        spanishTexts={spanishTexts}
        englishTexts={englishTexts}
      />
    </div>
  );
}

export default App;
