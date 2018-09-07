import React from "react";

function FilterBy(){

    var filterStyles = {
    }

    return(
        <div style={filterStyles} class="select">
            <h5>Filter by:</h5>
            <select>
                <option value="allKegs">All Kegs</option>
                <option value="reserved">Reserved Kegs</option>
                <option value="kegsToFill">Low Kegs</option>
                <option value="fullKegs">Full Kegs</option>
            </select>
        </div>
    );
}

export default FilterBy;