import React from "react";
import "../stylesheets/card.scss";
import { Route, Switch } from "react-router-dom";

function Card(props) {
  const { id, card, icon } = props;

  function handleCard(ev) {
    const cardSelectedId = ev.target.id;
  }
  return (
    <React.Fragment>
      <div onClick={handleCard} id={id} className={`game-board__card ${card}`}>
        <i className={`game-board__card--icon ${icon}`}></i>
      </div>
    </React.Fragment>
  );
}

export default Card;
