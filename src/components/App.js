import React from 'react';
import CardList from "./CardList"
import Header from './Header';
import Footer from './Footer';
import "../stylesheets/app.scss";
import JobsList from "./JobsList";


function App() {
  return (
    <div className="app-container">
      <Header />
      <CardList />
      <JobsList />
      <Footer />
    </div>
  );
}

export default App;
