import React from 'react';
import BrewList from './BrewList';
import Header from './Header';
import NewBrew from './NewBrew';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div className="container">
      <Header/>
      <Switch>
        <Route exact path='/' component={BrewList} />
        <Route path='/new-brew' component={NewBrew} />
      </Switch>
    </div>
  );
}

export default App;
