import React from "react";
import "../stylesheets/card.scss";
import { Route, Switch } from "react-router-dom";

function Card(props) {
  return (
    <React.Fragment>
      <div className={`game-board__card ${props.class}`}>
        {/* <p className="game-board__card--title">{props.name}</p> */}
        <i className={`game-board__card--icon ${props.icon}`}></i>
      </div>
    </React.Fragment>
  );
}

export default Card;
