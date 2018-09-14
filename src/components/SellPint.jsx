import React from "react";
import PropTypes from "prop-types";
import Brew from "./Brew";

function SellPint(props) {
    
    function sell() {
        props.brew.pints -= 1;
    }

    return (
        <div>
            <button onClick={sell} className="btn btn-info">Sell Pint</button>
        </div>
    );
}

SellPint.propTypes = {
    brew: PropTypes.instanceOf(Brew)
}

export default SellPint