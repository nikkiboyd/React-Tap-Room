import React from "react";

function FilterBy(){

    var filterStyles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

    return(
        <div style={filterStyles} class="select">
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