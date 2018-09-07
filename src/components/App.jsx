import React from 'react';
import BrewList from './BrewList';
import Header from './Header';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

function App(){

  return (
    <div className="container">
      <Helmet>
        <style>{'body { background-color: #282C34 }'}</style>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </Helmet>
      <Header/>
      <Switch>
        <Route exact path='/' component={BrewList} />
        <Route path='/new-brew' component={NewBrew} />
        <Route path='/about-us' component={AboutUs} />
      </Switch>
    </div>
  );
}

export default App;
