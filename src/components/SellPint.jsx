import React from "react";
import PropTypes from "prop-types";
import Brew from "./Brew";

function SellPint(props) {
    this.remaining =-1;

    var button = {
        backgroundColor: '#67FF7A',
    }

    return (
        <div>
            <button style={button}>Sell Pint</button>
        </div>
    );
}

SellPint.propTypes = {
    brew: PropTypes.instanceOf(Brew)
}
export default SellPint