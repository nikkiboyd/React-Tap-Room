import React from "react";
import PropTypes from "prop-types";
import BrewList from './BrewList';
import { Link } from 'react-router-dom';


function Brew(props) {

    var card = {
        padding: 20,
        margin: 20,
        maxWidth: 300,
        minWidth: 300,
        backgroundColor: '#333842',
        fontFamily: 'sans-serif',
        paddingTop: '50px',
        flexDirection: 'row',
        textAlign: 'center',
        borderRadius: 10,
        color: '#BBBBBB'
      }

    var description = {
        fontSize: 18,
        color: '#DDDDDD'
    }

    var drinkName = {
        fontSize: 20,
        color: '#DDDDDD'
    }

    var button = {
        margin: 5
    }

    function handleEditDetails(currentBrew) {  
        props.onEditDetails({name: _name.value, brewery: _brewery.value, description: _description.value, price: _price.value, abv: _abv.value, pints: _pints.value, id: currentBrew});
        _name.value = 'Test';
        _brewery.value = '';
        _description.value = '';
        _price.value = '';
        _abv.value = '';
        _pints.value = '';
    }

    // function handleEditDetails(id) {
    //     console.log('button activated for keg with name' + props.name);
    //     props.onEditDetails(id);
    // }

    return (
        <div style={card}>
            <h2 style={drinkName}>{props.name} by {props.brewer}</h2>
            <h3 style={description}><em>{props.description}</em></h3>
            <hr/>
            <h6>ABV: {props.abv}</h6> 
            <h6>${props.price}.00</h6> 
            <h6>{props.pints} of 124 pints remaining</h6> 
            <Link style={button} to="/edit" className="btn btn-dark">Home</Link> 
            <button onClick={() =>handleEditDetails(props.id)} className="btn btn-warning">Edit Details</button>
            {/* <SellPint/> */}
            {/* <EditPint/> */}
        </div>
    );
}

Brew.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    pints: PropTypes.string,
    id: PropTypes.string,
    onEditDetails: PropTypes.func
};

export default Brew;