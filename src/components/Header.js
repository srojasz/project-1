import React from 'react'
import "../stylesheets/header.scss"

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">
        My game vitae!
      </h2>
      <h3 className="header__subtitle">
        Why just apply when you can also play?
      </h3>
      <p className="header__text">
        ¡Hola! Me llamo Sara Rojas y soy una desarrolladora Front-end junior con muchas ganas de trabajar y seguir aprendiendo sobre JavaScript, React, HTML y CSS. Si estás buscando un perfil como este, te propongo un juego para ver si hacemos match: solo tienes que barajar las cartas y pinchar sobre ellas.
      </p>
      <p className="header__text">
        Solo cuando hayas volteado todas y me conozcas todo mejor, podrás desbloquear la carta de BONUS. ¿Juegas?
      </p>
    </header>
  )
}

export default Header;