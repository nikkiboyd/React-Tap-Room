import React from "react";
import Brew from "./Brew";
import FilterBy from "./FilterBy";
import PropTypes from 'prop-types';

function BrewList(props) {

  var flexContainer = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }

    return (
      <div>
        <FilterBy/>
        <div style={flexContainer}>
            {props.brewList.map((brew, index) => 
            <Brew name={brew.name}
            brewer={brew.brewer}
            description={brew.description}
            abv={brew.abv}
            price={brew.price}
            remaining={brew.remaining}
            key={index}/>
            )}
        </div>
      </div>
    );
}

BrewList.propTypes = {
  brewList: PropTypes.array
};

export default BrewList;