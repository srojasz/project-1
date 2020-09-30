import React from "react";
import "../stylesheets/card.scss";
import { Link, Route, Switch } from "react-router-dom";

function Card(props) {
  const { id, card, icon, name } = props;
  const route = `/card/${id}`;

  function handleCard(ev) {
    const cardSelectedId = ev.target.id;
  }

  function renderOpenCard(ev) {
    console.log("hola, muéstrame el detalle");
  }
  return (
    <React.Fragment>
      <Link to={route}>
        <div
          onClick={handleCard}
          id={id}
          className={`game-board__card ${card}`}
        >
          <i className={`game-board__card--icon ${icon}`}></i>
        </div>
      </Link>
      <Route path="/card/:id" render={renderOpenCard} />
    </React.Fragment>
  );
}

export default Card;
