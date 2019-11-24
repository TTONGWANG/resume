import React from 'react';
import Index from './component/Index'
import About from './component/About'
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        {/* <Index /> */}
        <Route exact Path="/"> <About /></Route>
        <Route Path="/Index"> <Index /></Route>
        <Route Path="/About"> <About /></Route>
      </Switch>
    </div>
  );
}

export default App;
