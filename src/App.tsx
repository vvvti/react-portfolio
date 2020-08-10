import React from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';

import './App.css';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      
     <h1>Portfolio</h1>
    </div>
  );
}

export default App;
