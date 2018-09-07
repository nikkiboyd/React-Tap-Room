import React from "react";

function FilterBy(){

    var filterStyles = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

    return(
        <div style={filterStyles} className="select">
            <select>
                <option value="null">Filter by...</option>
                <option value="allKegs">All Kegs</option>
                <option value="reserved">Reserved Kegs</option>
                <option value="kegsToFill">Low Kegs</option>
                <option value="fullKegs">Full Kegs</option>
            </select>
        </div>
    );
}

export default FilterBy;