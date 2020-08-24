import React, {useState} from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuDrawer from './components/MenuDrawer';

import './App.css';

export const App: React.FC = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  return (
    <div className="App">
      <MenuDrawer {isOpen, menuOpenHandler}/>
      <Header />
      <HomePage />
      
     <h1>Portfolio</h1>
    </div>
  );
}

export default App;
