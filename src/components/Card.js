import React from "react";
import "../stylesheets/card.scss";

function Card(props) {
  const { id, card, icon, isOpen, onClick } = props;

  let name = isOpen ? props.name : "";

  return (
    <React.Fragment>
      <div onClick={onClick} id={id} className={`game-board__card ${card}`}>
        <h3 className="game-board__card--title">{name}</h3>
        <i className={`game-board__card--icon ${icon}`}></i>
      </div>
    </React.Fragment>
  );
}

export default Card;
