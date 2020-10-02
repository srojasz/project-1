import React, { useState } from "react";
import Card from "./Card";
import "../stylesheets/card.scss";
import dataCards from "../data/dataCards.json";

function CardList(props) {
  const { spanishTexts, englishTexts, language } = props;

  const shuffleButton =
    language === "spanish"
      ? spanishTexts.shuffleButton
      : englishTexts.shuffleButton;

  const textAlert =
    language === "spanish"
      ? "Ooops, todavía no puedes abrir esta carta. ¡Sigue jugando!"
      : "Ooops, you can't open this card yet. Keep playing!";

  //Set state.
  const [cards, setCards] = useState(dataCards);

  //Handle functions.
  const handleSuffle = () => {
    let i, j, temp;
    for (i = cards.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = cards[i];
      cards[i] = cards[j];
      cards[j] = temp;
    }
    const shuffleCards = [...cards];
    setCards(shuffleCards);
  };

  const onClick = (index) => (e) => {
    const card = cards[index];
    const openCards = [];

    // If it is a card with no restrictions.
    if (!card.isBlocked) {
      cards[index] = {
        ...card,
        isOpen: true,
      };
    } else {
      // Keep the open cards ID in an array.
      cards.map((card) => {
        if (card.isOpen) {
          openCards.push(card.id);
        }
      });

      // If rest of cards are open, change isOpen and isBlocked properties at the state.
      if (openCards.length === cards.length - 1) {
        cards[index] = {
          ...card,
          isOpen: !card.isOpen,
          isBlocked: false,
        };
      } else {
        alert(textAlert);
      }
    }
    setCards([...cards]);
  };

  return (
    <div className="game">
      <button onClick={handleSuffle} className="header__button">
        {shuffleButton}
      </button>
      <div className="game-board">
        {cards.map((card, key) => {
          return (
            <Card
              key={key}
              id={card.id}
              icon={card.icon}
              card={card.css}
              name={card.name}
              isOpen={card.isOpen}
              isBlocked={card.isBlocked}
              onClick={onClick(key)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CardList;
