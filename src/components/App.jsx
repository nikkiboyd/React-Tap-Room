import React from 'react';
import BrewList from './BrewList';
import NewBrewControl from './NewBrewControl';
import Header from './Header';
import NewBrew from './NewBrew';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBrewList: []
    };
    this.handleAddingNewBrewToList = this.handleAddingNewBrewToList.bind(this);
  }

  handleAddingNewBrewToList(newBrew){
    var newMasterBrewList = this.state.masterBrewList.slice();
    newMasterBrewList.push(newBrew);
    this.setState({masterBrewList: newMasterBrewList});
  }

  render(){
    return (
      <div className="container">
        <Helmet>
          <style>{'body { background-color: #282C34 }'}</style>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
        </Helmet>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><BrewList brewList={this.state.masterBrewList} />} />
          <Route path='/new-brew' render={()=><NewBrewControl onNewTicketCreation={this.handleAddingNewTicketToList} />} />
          <Route path='/about-us' component={AboutUs} />
        </Switch>
      </div>
    );
  }
}

export default App;
