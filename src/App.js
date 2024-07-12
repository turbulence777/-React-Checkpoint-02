// src/App.js
import React from 'react';
import PlayersList from './components/PlayersList';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>Football Players List</h1>
      <PlayersList />
    </div>
  );
};

export default App;