import React from 'react';
import BrewList from './BrewList';
import NewBrewControl from './NewBrewControl';
import Header from './Header';
import NewBrew from './NewBrew';
import EditBrewForm from './EditBrewForm';
import AboutUs from './AboutUs';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterBrewList: [
          {
            name: 'Ruby Zozzle',
            brewer: 'Hi-Wheel',
            description: 'Sparkling Wine & Grapefruit',
            abv: '6.8%',
            price: '7',
            remaining: '20'
          },
          {
            name: 'Tart N Juicy',
            brewer: 'Epic',
            description: 'Sour IPA',
            abv: '4.5%',
            price: '6',
            remaining: '60'
          },
          {
            name: 'Hamm\'s',
            brewer: 'Miller/Coors',
            description: 'American Lager',
            abv: '4.7%',
            price: '3',
            remaining: '65'
          },
          {
            name: 'Prismatic',
            brewer: 'Ninkasi',
            description: 'Juicy IPA',
            abv:  '5.9%',
            price: '6',
            remaining: '75'
          },
          {
            name: 'Juicy Haze',
            brewer: 'New Belgium',
            description: 'India Pale Ale',
            abv:  '7.5%',
            price: '6',
            remaining: '18'
          },
          {
            name: '8 Hop',
            brewer: 'New Belgium',
            description: 'Pale Ale',
            abv:  '5.5%',
            price: '6',
            remaining: '58'
          }
        ],
      brewToEdit: null
    };
    this.handleAddingNewBrewToList = this.handleAddingNewBrewToList.bind(this);
    this.handleEditingBrewDetails = this.handleEditingBrewDetails.bind(this);
  }

  handleAddingNewBrewToList(newBrew){
    var newMasterBrewList = this.state.masterBrewList.slice();
    newMasterBrewList.push(newBrew);
    this.setState({masterBrewList: newMasterBrewList});
  }

  handleEditingBrewDetails(id){
    let currentBrew = Object.assign({}, this.state.masterBrewList[id], {});
    this.setState({brewToEdit: currentBrew});
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
          <Route path='/new-brew' render={()=><NewBrewControl onNewBrewCreation={this.handleAddingNewBrewToList} 
                                                              onEditDetails={this.handleEditingBrewDetails} 
                                                              currentBrew={this.state.brewToEdit}
                                                              />} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/edit' component={EditBrewForm}/>
        </Switch>
      </div>
    );
  }
}

export default App;
