import React from 'react';
import BrewList from './BrewList';
import Header from './Header';
import NewBrew from './NewBrew';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

function App(){

  return (
    <div className="container">
      <Helmet>
        <style>{'body { background-color: #282C34 }'}</style>
      </Helmet>
      <Header/>
      <Switch>
        <Route exact path='/' component={BrewList} />
        <Route path='/new-brew' component={NewBrew} />
      </Switch>
    </div>
  );
}

export default App;
