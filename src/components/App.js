import React, { useState } from 'react';
import CardList from "./CardList"
import Header from './Header';
import Footer from './Footer';
import "../stylesheets/app.scss";
import JobsList from "./JobsList";
import dataCards from "../data/dataCards.json";

// Mi idea es pasar por props a CardList el array con el dataCards.
// Cuando alguien pinche en a mezclar subo por lifting el nuevo orden de las cartas y se lo paso por props a CardList.

function App() {
  const [cards, setCards] = useState(dataCards);

  return (
    <div className="app-container">
      <Header />
      <CardList cards={cards}/>
      <JobsList />
      <Footer />
    </div>
  );
}

export default App;
