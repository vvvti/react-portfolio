import React, {Fragment, useState} from 'react';

import {
  HashRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Header from './components/Header';
import HomePage from './components/HomePage';
import MenuDrawer from './components/MenuDrawer';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

import './App.css';
import ContactForm from './components/ContactForm';



export const App: React.FC = () => {
  
  
  return (
    <Router>
    <Fragment>
    <div className="App">
      <Header />
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/AboutPage" component={AboutPage} />
      <Route exact path="/Projects" component={ProjectsPage} />
      <Route exact path="/Contact" component={ContactForm} />
      
     </Switch>
     <Footer />
    </div>    
    
    </Fragment>
    </Router>
  );
}

export default App;
