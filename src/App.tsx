import React, {useState} from 'react';

import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuDrawer from './components/MenuDrawer';

import './App.css';


export const App: React.FC = ({children}) => {
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const menuOpenHandler = () => {
      setMenuDrawerOpen(menuDrawerOpen);
  }
  return (
    <div className="App">
      <MenuDrawer
       menuDrawerOpen={menuDrawerOpen}
       menuOpenHandler={menuOpenHandler}
        />
        {children}
      <Header />
      <HomePage />
      
     <h1>Portfolio</h1>
    </div>
  );
}

export default App;
