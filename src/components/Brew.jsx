import React from "react";
import PropTypes from "prop-types";
import SellPint from "./SellPint";
import EditPint from "./EditPint";

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
        fontSize: 13,
        color: '#DDDDDD'
    }

    var drinkName = {
        fontSize: 20,
        color: '#DDDDDD'
    }

    return (
        <div style={card}>
            <h2 style={drinkName}>{props.name} | {props.brewer}</h2>
            <h3 style={description}><em>{props.description}</em></h3>
            <hr/>
            <h3>ABV: {props.abv}</h3> 
            <h3>${props.price}.00</h3> 
            <h3>{props.remaining} of 124 pints remaining</h3> 
            <SellPint/>
            <br/>
            <EditPint/>
        </div>
    );
}

Brew.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.number
};

export default Brew;