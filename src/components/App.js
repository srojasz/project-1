import React from 'react';
import CardList from "./CardList"
import Header from './Header';
import Footer from './Footer';
import "../stylesheets/app.scss";

function App() {
  return (
    <div className="app-container">
      <Header />
      <CardList />
      <Footer />
    </div>
  );
}

export default App;
