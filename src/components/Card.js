import React from "react";
import "../stylesheets/card.scss";

function Card({
  id,
  name,
  card,
  icon,
  isOpen,
  details,
  onClick,
  handleClose,
  isBlocked,
}) {
  let cardName = isOpen ? name : "";
  const cardUp = isOpen ? "card-up" : "";
  const unlockedCard =
    isBlocked !== undefined && isBlocked === false ? "unlocked-card" : "";
  return (
    <div
      onClick={onClick}
      id={id}
      className={`game-board__card ${card} ${cardUp} ${unlockedCard}`}
    >
      <h3 className="game-board__card--title">{cardName}</h3>
      <i className={`game-board__card--icon ${icon}`}></i>
      {isOpen
        ? details.map((detail, key) => {
            return (
              <div className="game-board__card--detail" key={key}>
                <p>{detail.title}</p>
                <p>{detail.date}</p>
              </div>
            );
          })
        : null}
      {isOpen ? <p onClick={handleClose}>X</p> : null}
    </div>
  );
}

export default Card;
