import React from 'react'
import Card from "./Card"
import "../stylesheets/card.scss";
import dataCards from "../data/dataCards.json";

function handleSuffle() {
  const cards = dataCards;  
  let i, j, temp;
    for (i = cards.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
    }
    // props.cards(cards);
    return cards;   
}

function CardList(props) {
  return (
    <React.Fragment>
      <button onClick={handleSuffle} className="header__button">¡A mezclar!</button>
      <div className="game-board">
        {props.cards.map((card, key) => {
          return (
            <Card
              key={key}
              name={card.name}
              icon={card.icon}
              class={card.class}
            />
            )
          })
        }
      </div>
    </React.Fragment>
    
   
  )
}

export default CardList;