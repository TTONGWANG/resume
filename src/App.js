import React from 'react';
import Index from './component/Index'
import About from './component/About'
import Projects from './component/Projects'
import Contact from './component/Contact'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Index /> */}
        <Route exact path="/"> <Index /></Route>
        <Route path="/Index"> <Index /></Route>
        <Route path="/About"> <About /></Route>
        <Route path="/Projects"> <Projects /></Route>
        <Route path="/Contact"> <Contact /></Route>
      </Switch>
    </div>
  );
}

export default App;
