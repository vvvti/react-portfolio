import React, {useState} from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuDrawer from './components/MenuDrawer';
import Footer from './components/Footer'

import './App.css';


export const App: React.FC = () => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const menuOpenHandler = () => {
      setMenuDrawerOpen(!menuDrawerOpen);
  }

  let menuDrawer

  if (menuDrawerOpen) {
    menuDrawer = <MenuDrawer />
  }

  return (
    <div className="App">
      {menuDrawer}
      
      <Header />
      <HomePage />
      <Footer />
      
     <h1>Portfolio</h1>
    </div>
  );
}

export default App;
