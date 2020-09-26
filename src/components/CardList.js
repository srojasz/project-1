import React from 'react'
import Card from "./Card"
import "../stylesheets/card.scss";

function CardList() {
  return (
    <div className="game-board">
      < Card
        style="card__yellow"
        title="Formación"
        icon="Icono de formación"
      />
      < Card
        style="card__purple"
        title="Experiencia"
        icon="Icono de experiencia"
      />
      < Card
        style="card__aquamarina"
        title="Idiomas"
        icon="Icono de idiomas"
      />
      < Card
        style="card__red"
        title="Proyectos"
        icon="Icono de proyectos"
      />
      < Card
        style="card__green"
        title="Soft Skills"
        icon="Icono de Soft Skills"
      />
      < Card
        style="card__pink"
        title="B O N U S"
        icon="Icono de estrella"
      />
    </div>
  )
}

export default CardList;