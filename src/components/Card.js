import React from "react";
import "../stylesheets/card.scss";

function Card(props) {
  const { id, card, icon, isOpen, onClick, isBlocked } = props;

  let name = isOpen ? props.name : "";
  const cardUp = isOpen ? "card-up" : "";
  const unlockedCard =
    isBlocked !== undefined && isBlocked === false ? "unlocked-card" : "";

  return (
    <React.Fragment>
      <div
        onClick={onClick}
        id={id}
        className={`game-board__card ${card} ${cardUp} ${unlockedCard}`}
      >
        <h3 className="game-board__card--title">{name}</h3>
        <i className={`game-board__card--icon ${icon}`}></i>
      </div>
    </React.Fragment>
  );
}

export default Card;
