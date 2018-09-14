import React from 'react';
import PropTypes from 'prop-types';
import BrewList from './BrewList';
import EditBrewForm from './EditBrewForm';
import { Switch, Route } from 'react-router-dom';

function EditDetails(props){
    
  if (props.currentBrew !== null) {
    return (
      <div>
        <Switch>
          <Route path='/' render={()=><EditBrewForm currentBrew={props.currentBrew}/>}/>
        </Switch>
      </div>
      );
  } else {
    return (
      <div>
        <BrewList brewList={props.brewList} onEditDetails={props.onEditEdtails}/>
      </div>
    );
  }
}

EditDetails.propTypes = {
  brewList: PropTypes.object,
  onEditDetails: PropTypes.func,
  currentBrew: PropTypes.object
};

export default EditDetails;