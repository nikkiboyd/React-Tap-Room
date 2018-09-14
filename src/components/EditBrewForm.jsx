import React from 'react';
import PropTypes from 'prop-types';

function EditBrewForm(props){
    function handleEditDetails(event) {  
      event.preventDefault();
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value});
        _name.value = '';
        _brewery.value = '';
        _description.value = '';
        _price.value = '';
        _abv.value = '';
        _pints.value = '';
    }

    return(
        <div>
            <p>Edit Brew Form</p>
        </div>
    );
}

export default EditBrewForm;