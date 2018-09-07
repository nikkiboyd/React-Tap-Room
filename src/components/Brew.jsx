import React from "react";
import PropTypes from "prop-types";

function Brew(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <h3>{props.brewer}</h3>
            <h3>{props.description}</h3>
            <h3>{props.abv}</h3> 
            <h3>{props.price}</h3> 
            <h3>{props.remaining}</h3> 
        </div>
    );
}

Brew.propTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.number,
    remaining: PropTypes.number
};

export default Brew;