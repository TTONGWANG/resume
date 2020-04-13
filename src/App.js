import React from 'react';
import Homepage from './components/Homepage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div className = "App">
      <Switch>
        <Route exact path="/"> <Homepage /></Route>
        <Route path="/Homepage"> <Homepage /></Route>
        <Route path="/About"> <About /></Route>
        <Route path="/Projects"> <Projects /></Route>
        <Route path="/Contact"> <Contact /></Route>
      </Switch>
    </div>
  );
}

export default App;
