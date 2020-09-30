import React, { useState } from "react";
import Card from "./Card";
import "../stylesheets/card.scss";
import dataCards from "../data/dataCards.json";

function CardList() {
  const [cards, setCards] = useState(dataCards);

  function handleSuffle() {
    let i, j, temp;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    const shuffleCards = [...cards];
    setCards(shuffleCards);
  }

  return (
    <div className="game">
      <button onClick={handleSuffle} className="header__button">
        ¡A mezclar!
      </button>
      <div className="game-board">
        {cards.map((card, key) => {
          return (
            <Card key={key} id={card.id} icon={card.icon} card={card.class} />
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
