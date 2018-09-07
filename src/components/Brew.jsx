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
        backgroundColor: '#ecf0f1',
        fontFamily: 'sans-serif',
        paddingTop: '50px',
      }

    return (
        <div style={card}>
            <h2>{props.name} | {props.brewer}</h2>
            <h3><em>{props.description}</em></h3>
            <h3>ABV: {props.abv}</h3> 
            <h3>${props.price}.00</h3> 
            <h3>{props.remaining} of 124 pints remaining</h3> 
            <SellPint/><EditPint/>
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