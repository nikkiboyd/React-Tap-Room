import React from 'react';
import BrewList from './BrewList';
import Header from './Header';
// import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className="container">
      <Header/>
      <BrewList/>
    </div>
  );
}

export default App;
